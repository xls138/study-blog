import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Complete Intro to React, v9",
    href: "#",
    imageUrl: "/courses/course1.webp",
    date: "November 26, 2024",
    author: {
      name: "Brian Holt",
      imageUrl: "/authors/author1.webp",
    },
  },
  {
    id: 2,
    title: "Full Stack for Front-End Engineers, v3",
    href: "#",
    imageUrl: "/courses/course2.webp",
    date: "April 18, 2023",
    author: {
      name: "Jem Young",
      imageUrl: "/authors/author2.webp",
    },
  },
  {
    id: 3,
    title: "Tailwind CSS 4+",
    href: "#",
    imageUrl: "/courses/course3.webp",
    date: "August 4, 2025",
    author: {
      name: "Steve Kinney",
      imageUrl: "/authors/author3.webp",
    },
  },
  {
    id: 4,
    title: "Next.js Fundamentals, v4",
    href: "/courses/nextjs-fundamentals-v4",
    imageUrl: "/courses/course4.webp",
    date: "April 3, 2025",
    author: {
      name: "Scott Moss",
      imageUrl: "/authors/author4.webp",
    },
  },
];

export default function CoursesSection() {
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
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-2xl bg-card pb-8 pt-72 transition-transform hover:scale-105"
            >
              {/* Background Image */}
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="absolute inset-0 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />

              {/* Content */}
              <div className="relative px-8">
                <div className="flex items-center text-sm text-gray-300">
                  <time>{post.date}</time>
                  <span className="mx-4">•</span>
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>{post.author.name}</span>
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  <a href={post.href} className="hover:underline">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
