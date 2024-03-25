import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/ui/Footer";
import { SearchProvider } from "./context/SearchContext";
import { TrialUserProvider } from "./context/TrialUserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Movies",
  description: "TMBD Next.js Movies App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-500`}>
        <AuthProvider>
          <TrialUserProvider>
            <SearchProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </SearchProvider>
          </TrialUserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
