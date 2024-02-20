import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css';

// components
import Layout from "@/components/Layout";

// app
import StoreProvider from "./StoreProvider";

// const
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next 14 Axios Redux Project",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Layout>
            {children}
          </Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
