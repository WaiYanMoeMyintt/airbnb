import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";
const inter = Nunito({ subsets: ["latin"] });
import RegisterModal from "./components/modal/RegisterModal";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Let more travel with our Airbnb.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Modal isOpen actionLabel="Submit" title=""/> */}
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
