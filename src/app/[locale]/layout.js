import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maira Piedade - Hello Maravilhosas",
  description: "WebApp da Terapeura Maira Piedade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className=" bg-gradient-to-br from-slate-100 to-stone-200 flex h-screen w-full">
          <div className=" flex justify-center w-full">
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
