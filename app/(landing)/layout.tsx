import { Toaster } from "@/components";
import { ProviderProps } from "@/types";
import { Header, Footer } from "@/views/landing/components";

export default function LandingLayout({ children }: Readonly<ProviderProps>) {
  return (
    <>
      <Header />
      <Toaster />
      <main>{children}</main>
      <Footer />
    </>
  );
}
