import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shahzoab Khan (Shazz)",
  description:
    "Front-End Developer ⟩ 10+ Years of Experience ⟩ Building Modern Websites & Apps ⟩ Team Leader ⟩ Lifelong Learner ⟩ Seeking New Challenges"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
