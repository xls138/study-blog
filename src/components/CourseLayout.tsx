"use client";

import { type CourseWithSlug } from "@/lib/courses";
import { Prose } from "@/components/Prose";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import TableOfContents from "./TableOfContents";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export function CourseLayout({
  course,
  children,
}: {
  course: CourseWithSlug;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-2xl gap-x-10 px-4 py-10 sm:px-6 sm:py-14 lg:max-w-5xl">
      <main className="w-full flex-1">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
          {course.title}
        </h1>
        <p className="mt-6 text-xl text-gray-600">{course.description}</p>
        <article>
          <Prose id="content" className="mt-8" data-mdx-content>
            {children}
          </Prose>
        </article>
      </main>

      <aside className="hidden w-80 lg:block">
        <TableOfContents contentId="content" />
      </aside>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-6 right-6 z-50 shadow-lg border-2"
              aria-label="Table of Contents"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>On this page</SheetTitle>
            </SheetHeader>
            <div>
              <TableOfContents contentId="content" showTitle={false} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
