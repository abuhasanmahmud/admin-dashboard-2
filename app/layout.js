import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { SidebarProvider } from "@/context/SidebarContext";

const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "admin",
  description: "nextjs13 admin dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <SidebarProvider>
          <ToastContainer />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
