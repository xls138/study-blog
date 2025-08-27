import Link from "next/link";

const topics = [
  { name: "JavaScript", href: "#" },
  { name: "CSS", href: "#" },
  { name: "Node.js", href: "#" },
  { name: "TypeScript", href: "#" },
  { name: "JavaScript Performance", href: "#" },
  { name: "Functional JavaScript", href: "#" },
  { name: "React & Next.js", href: "#" },
  { name: "Vue.js", href: "#" },
  { name: "Code Architecture", href: "#" },
  { name: "Build Tools & Testing", href: "#" },
  { name: "Enterprise & Leadership", href: "#" },
  { name: "Backend Languages", href: "#" },
  { name: "Browser APIs", href: "#" },
  { name: "Python", href: "#" },
  { name: "Data Visualization", href: "#" },
];

export default function TopicsSection() {
  return (
    <div className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">Topics</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            涵盖前端开发、后端技术和工程实践的全面学习主题
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Link
              key={topic.name}
              href={topic.href}
              className="group p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors text-center">
                  {topic.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
