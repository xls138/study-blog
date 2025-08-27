import HeaderSection from "@/components/HeaderSection";
import PathsSection from "@/components/PathsSection";
import TopicsSection from "@/components/TopicsSection";
import StackSection from "@/components/StackSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <HeaderSection />
      <PathsSection />
      <TopicsSection />
      <StackSection />
      <Footer />
    </>
  );
}
