import "./globals.css";

export const metadata = {
  title: "A Versao Sua Que Voce Sente Falta",
  description:
    "Um ebook direto para reconstruir rotina, autoestima e energia com pequenas mudancas praticas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
