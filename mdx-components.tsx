import Image, { type ImageProps } from "next/image";
import { type MDXComponents } from "mdx/types";
import { ReactNode } from "react";

function getTextContent(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  if (typeof node === "object" && "props" in node) {
    return getTextContent(
      (node as { props: { children: ReactNode } }).props.children
    );
  }

  return "";
}

function generateId(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => {
      const id = generateId(getTextContent(children));
      return <h1 id={id}>{children}</h1>;
    },
    h2: ({ children }) => {
      const id = generateId(getTextContent(children));
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children }) => {
      const id = generateId(getTextContent(children));
      return <h3 id={id}>{children}</h3>;
    },
    h4: ({ children }) => {
      const id = generateId(getTextContent(children));
      return <h4 id={id}>{children}</h4>;
    },
    Image: (props: ImageProps) => <Image {...props} alt={props.alt ?? ""} />,
  };
}
