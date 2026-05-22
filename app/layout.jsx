import "./globals.css";

export const metadata = {
  title: "Volte Para Voce | Ebook Premium",
  description:
    "Um guia emocional e pratico para recuperar energia, autoestima e presenca atraves de pequenas mudancas reais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
