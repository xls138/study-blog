import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <Button>Click me</Button>
      </main>
    </>
  );
}
