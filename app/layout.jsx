import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Volte Para Você | Ebook Premium",
  description:
    "Um guia emocional e prático para recuperar energia, autoestima e presença através de pequenas mudanças reais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
