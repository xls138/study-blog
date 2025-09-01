import { type Metadata } from "next";
import { type CourseWithSlug, getAllCourses } from "@/lib/courses";
import Image from "next/image";
import Link from "next/link";

function Course({ course }: { course: CourseWithSlug }) {
  return (
    <article className="group relative aspect-square overflow-hidden rounded-2xl bg-card pb-8 transition-transform hover:scale-105">
      {/* Background Image */}
      <Image
        src={course.imageUrl}
        alt={course.title}
        fill
        className="absolute inset-0 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
        <div className="flex items-center text-sm text-gray-300">
          <time>{course.date}</time>
          <span className="mx-4">•</span>
          <div className="flex items-center gap-2">
            <Image
              src={course.author.imageUrl}
              alt={course.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{course.author.name}</span>
          </div>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-white">
          <Link href={`/courses/${course.slug}`} className="hover:underline">
            <span className="absolute inset-0" />
            {course.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}

export const metadata: Metadata = {
  title: "Courses",
  description: "世界级技术导师精品课程，打造国际化开发视野",
};

export default async function CoursesIndex() {
  const courses = await getAllCourses();

  return (
    <div className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">Courses</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            世界级技术导师精品课程，打造国际化开发视野
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Course key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
