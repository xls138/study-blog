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
  projects: [{ name: "Fall Guys", href: "#" }],
  topics: [
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
  ],
  stack: [
    { name: "pnpm", href: "https://pnpm.io/zh/installation" },
    { name: "Vite", href: "https://cn.vite.dev/guide/" },
    { name: "React 18", href: "https://zh-hans.react.dev/learn" },
    {
      name: "TypeScript",
      href: "https://www.typescriptlang.org/zh/docs/handbook/typescript-in-5-minutes.html",
    },
    { name: "React Router", href: "https://reactrouter.com/home" },
    {
      name: "Tailwind CSS",
      href: "https://tailwindcss.com/docs/installation/using-vite",
    },
    {
      name: "React Aria Components",
      href: "https://react-spectrum.adobe.com/react-aria/components.html",
    },
    { name: "Axios", href: "https://axios-http.com/zh/docs/intro" },
    { name: "ESLint", href: "https://eslint.org/docs/latest/" },
    { name: "Prettier", href: "https://prettier.io/docs/" },
    { name: "React Hook Form", href: "https://react-hook-form.com/get-started" },
    { name: "Zod", href: "https://zod.dev/" },
    {
      name: "Zustand",
      href: "https://zustand.docs.pmnd.rs/getting-started/introduction",
    },
    {
      name: "Day.js",
      href: "https://day.js.org/docs/zh-CN/installation/installation",
    },
    { name: "Lucide React", href: "https://lucide.dev/icons/" },
  ],
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

              <div>
                <h3 className="font-medium text-foreground mb-4">Topics</h3>
                <ul className="space-y-2">
                  {navigation.topics.map((item) => (
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
                <h3 className="font-medium text-foreground mb-4">Stack</h3>
                <ul className="space-y-2">
                  {navigation.stack.map((item) => (
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
