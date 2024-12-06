import Footer from "@/components/footer";
import Nav from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <main className="flex-1">
        <Nav />
        <div className="mx-auto max-w-7xl sm:py-16 lg:py-12">
            {children}
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
