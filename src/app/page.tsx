import { Button } from "@/components/ui/button";
import HeaderSection from "@/components/HeaderSection";
import CoursesSection from "@/components/CoursesSection";
import TutorialsSection from "@/components/TutorialsSection";
import ContentSection from "@/components/ContentSection";

export default function Page() {
  return (
    <>
      <HeaderSection />
      <CoursesSection/>
      <TutorialsSection/>
      <ContentSection/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <Button>Click me</Button>
      </main>
    </>
  );
}
