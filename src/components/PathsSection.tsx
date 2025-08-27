import {
  Code2,
  Zap,
  Trophy,
  GraduationCap,
  Server,
  Palette,
} from "lucide-react";

const paths = [
  {
    name: "Beginner",
    href: "#",
    description: "Your Path to Becoming a Career-Ready Web Developer!",
    progress: "0%",
    icon: Code2,
  },
  {
    name: "Professional",
    href: "#",
    description: "Your Path to Becoming a Senior Web Developer!",
    progress: "0%",
    icon: Zap,
  },
  {
    name: "Expert",
    href: "#",
    description: "Your Path to Becoming a Lead / Staff Developer!",
    progress: "0%",
    icon: Trophy,
  },
  {
    name: "Computer Science",
    href: "#",
    description: "Learn Data Structures & Algorithms with JavaScript",
    progress: "0%",
    icon: GraduationCap,
  },
  {
    name: "Fullstack to Backend",
    href: "#",
    description: "Expand Your Abilities to the Server and Master the Fullstack",
    progress: "0%",
    icon: Server,
  },
  {
    name: "Design to Code",
    href: "#",
    description: "Make Your Designs Come to Life Through Code!",
    progress: "0%",
    icon: Palette,
  },
];

export default function PathsSection() {
  return (
    <div className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">Paths</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            从零开始，逐步构建前端学习之路
          </p>
        </div>

        {/* Paths Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path) => {
            const IconComponent = path.icon;
            return (
              <a
                key={path.name}
                href={path.href}
                className="group p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {path.name}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">{path.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress:</span>
                  <span className="font-medium text-primary">
                    {path.progress}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
