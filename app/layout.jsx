import './globals.css'; // 👈 Import du CSS Tailwind

export const metadata = {
  title: "LifeBook – Racontez votre histoire",
  description: "Créez un livre biographique, d'amour ou hommage grâce à l'intelligence artificielle. Un cadeau touchant, dès 8,90 €.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script async defer data-domain="lifebook.fr" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
