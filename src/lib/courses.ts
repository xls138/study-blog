import glob from "fast-glob";

interface Course {
  title: string;
  imageUrl: string;
  date: string;
  author: {
    name: string;
    imageUrl: string;
  };
}

export interface CourseWithSlug extends Course {
  slug: string;
}

async function importCourse(courseFilename: string): Promise<CourseWithSlug> {
  const { course } = (await import(`../app/courses/${courseFilename}`)) as {
    default: React.ComponentType;
    course: Course;
  };

  return {
    slug: courseFilename.replace(/(\/page)?\.mdx$/, ""),
    ...course,
  };
}

export async function getAllCourses() {
  const courseFilenames = await glob("*/page.mdx", {
    cwd: "./src/app/courses",
  });

  const courses = await Promise.all(courseFilenames.map(importCourse));

  return courses.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
