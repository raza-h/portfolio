import { Toaster } from "@/components/common/toaster";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Toaster />
      {children}
      <Footer />
    </>
  );
}
