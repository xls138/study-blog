import Header from "@/components/Header";

export default function NextJsFundamentalsV4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
