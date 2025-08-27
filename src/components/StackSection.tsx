const stack = [
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
];

export default function StackSection() {
  return (
    <div className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">Stack</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            使用现代化的工具和技术构建高质量的前端应用
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((tech) => (
            <a
              key={tech.name}
              href={tech.href}
              className="group p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors text-center">
                  {tech.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
