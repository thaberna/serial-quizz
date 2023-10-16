import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "SerialQuizz",
  description: "El juego de series",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
