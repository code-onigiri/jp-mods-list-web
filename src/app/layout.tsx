import type { Metadata } from "next";
import { pages } from "next/dist/build/templates/app-page";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JapanModsList-Web",
  description: "MODを一元的に探せるサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-200`}>
        <Head />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

function Head(){
  return(
    <header className="bg-gray-600 flex justify-center py-2">
      <Link href="/" className="rounded-full px-4 py-1 mx-6 text-lg lg:text-xl text-white bg-gray-600 hover:bg-gray-700">
        Home
      </Link>
      <Link href="/search" className="rounded-full px-4 py-1 mx-6 text-lg lg:text-xl text-white bg-gray-600 hover:bg-gray-700">
        Search
      </Link>
      <Link href="/add" className="rounded-full px-4 py-1 mx-6 text-lg lg:text-xl text-white bg-gray-600 hover:bg-gray-700">
        Add
      </Link>
    </header>
  )
}

function Footer(){
  return(
    <footer className="fixed bottom-0 left-0 w-full bg-gray-600 flex justify-center py-2">
      <p className="text-white">© 2024 JapanModsList(code-onigiri)</p>
    </footer>
  )
}
