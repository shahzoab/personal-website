import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["200", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Shahzoab Khan (Shazz)",
  description:
    "Front-End Developer ⟩ 10+ Years of Experience ⟩ Building Modern Websites & Apps ⟩ Team Leader ⟩ Lifelong Learner ⟩ Seeking New Challenges"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
