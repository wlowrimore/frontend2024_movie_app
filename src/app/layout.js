import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} bg-slate-500`}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
