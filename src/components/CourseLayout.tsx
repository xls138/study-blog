"use client";

import { type CourseWithSlug } from "@/lib/courses";
import { Prose } from "@/components/Prose";

export function CourseLayout({
  course,
  children,
}: {
  course: CourseWithSlug;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <article>
        <header>
          <h1 className="text-3xl font-bold text-zinc-800">{course.title}</h1>
          <time className="text-sm text-zinc-500">{course.date}</time>
        </header>
        <Prose className="mt-8" data-mdx-content>
          {children}
        </Prose>
      </article>
    </div>
  );
}
