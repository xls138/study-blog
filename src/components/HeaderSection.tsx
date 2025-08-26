import { Code2, BotMessageSquare, Eye, Smartphone } from "lucide-react";

const cards = [
  {
    name: "前端核心技术",
    description:
      "掌握 HTML/CSS/JS 基础，深入 React/Vue 生态，熟练使用现代开发工具链。",
    icon: Code2,
  },
  {
    name: "AI 驱动开发",
    description:
      "ChatGPT/Copilot 辅助编程、AI 工具集成、智能化前端开发流程优化。",
    icon: BotMessageSquare,
  },
  {
    name: "可视化 & 图形",
    description:
      "D3.js、Three.js、Canvas、SVG 动画和数据可视化项目实战经验分享。",
    icon: Eye,
  },
  {
    name: "跨平台开发",
    description:
      "React Native、Electron、小程序开发、PWA 和混合应用开发实践。",
    icon: Smartphone,
  },
];

export default function HeaderSection() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Study Blog
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            记录前端学习之路，分享现代 Web 开发技术、最佳实践和项目实战经验。
          </p>
        </div>

        {/* 卡片网格 */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-lg bg-card p-6 shadow-sm border border-border"
            >
              <card.icon className="h-6 w-6 flex-none text-primary" />
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {card.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
