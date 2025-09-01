"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

function useTableOfContents(contentId: string) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; active: boolean }[]
  >([]);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.getElementById(contentId);
    if (!root) return;

    const extractedHeadings = Array.from(root.querySelectorAll("h1")).map(
      (heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        active: false,
      })
    );
    setHeadings(extractedHeadings);

    const contentElements = new Map<Element, string>();
    let currentHeadingId: string | null = null;

    Array.from(root.children).forEach((element) => {
      if (element.id && element.tagName === "H1") {
        currentHeadingId = element.id;
      }
      if (!currentHeadingId) return;
      contentElements.set(element, currentHeadingId);
    });

    const visibleElements = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleElements.add(entry.target);
          } else {
            visibleElements.delete(entry.target);
          }
        });

        const firstVisibleContentElement = Array.from(
          contentElements.entries()
        ).find(([element]) => visibleElements.has(element));

        setHeadings((current) =>
          current.map((heading) => ({
            ...heading,
            active: heading.id === firstVisibleContentElement?.[1],
          }))
        );
      },
      {
        rootMargin: `-${
          getComputedStyle(document.documentElement).scrollPaddingTop
        } 0px 0px`,
      }
    );

    Array.from(contentElements.keys()).forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, [pathname, contentId]);

  return headings;
}

export default function TableOfContents({
  contentId,
  showTitle = true,
}: {
  contentId: string;
  showTitle?: boolean;
}) {
  const headings = useTableOfContents(contentId);

  return (
    <nav className="sticky top-16">
      {showTitle && (
        <h2 className="text-sm/6 font-semibold text-gray-950 mb-3">
          On this page
        </h2>
      )}
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <ul className="flex flex-col gap-2 text-sm/6 text-gray-700 mr-8">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className="px-4 py-1 hover:bg-gray-100 hover:rounded-md hover:text-gray-950"
            >
              <a
                href={`#${heading.id}`}
                aria-current={heading.active ? "location" : undefined}
                className="block aria-[current=location]:font-medium aria-[current=location]:text-blue-500"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </nav>
  );
}
