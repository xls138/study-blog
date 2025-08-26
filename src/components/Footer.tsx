import Image from "next/image";

const navigation = {
  paths: [
    { name: "Beginner", href: "#" },
    { name: "Professional", href: "#" },
    { name: "Expert", href: "#" },
    { name: "Computer Science", href: "#" },
    { name: "Fullstack to Backend", href: "#" },
    { name: "Design to Code", href: "#" },
  ],
  courses: [
    { name: "JavaScript", href: "#" },
    { name: "CSS", href: "#" },
    { name: "Node.js", href: "#" },
    { name: "TypeScript", href: "#" },
    { name: "React & Next.js", href: "#" },
  ],
  tutorials: [
    { name: "FullStackOpen", href: "#" },
    { name: "react-tutorial.app", href: "#" },
  ],
  projects: [{ name: "Fall Guys", href: "#" }],
  social: [
    { name: "GitHub", href: "#", icon: "/github.svg" },
    { name: "Email", href: "#", icon: "/mail.svg" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">Study Blog</h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              记录前端学习之路，分享现代 Web 开发技术、最佳实践和项目实战经验。
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="transition-opacity hover:opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-medium text-foreground mb-4">Paths</h3>
                <ul className="space-y-2">
                  {navigation.paths.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-4">Courses</h3>
                <ul className="space-y-2">
                  {navigation.courses.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-4">Tutorials</h3>
                <ul className="space-y-2">
                  {navigation.tutorials.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-4">Projects</h3>
                <ul className="space-y-2">
                  {navigation.projects.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
