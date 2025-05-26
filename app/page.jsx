export default function Page() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-32 px-6 text-center bg-gradient-to-br from-violet-50 via-pink-50 to-fuchsia-100 animate-fadeIn">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 drop-shadow-md">
            Créez un livre unique, offrez une mémoire éternelle
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Pour la Fête des Pères, transformez vos souvenirs en un cadeau exceptionnel avec LifeBook.
          </p>
          <a
            href="#offre"
            className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Commencer maintenant
          </a>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-100 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section id="offre" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Une interview guidée",
              image: "https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%202.png",
              text: "Répondez à des questions simples et laissez LifeBook générer un récit fidèle, fluide et émotionnel."
            },
            {
              title: "Un design haut de gamme",
              image: "https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%201.png",
              text: "Chaque livre est unique, mis en page automatiquement avec soin et élégance."
            },
            {
              title: "Un cadeau qui reste",
              image: "https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%203.png",
              text: "Format numérique ou imprimé, livré directement à domicile ou à offrir."
            }
          ].map(({ title, image, text }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
            >
              <img
                src={image}
                alt={title}
                className="rounded-2xl mb-6 w-full h-60 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="py-24 px-6 bg-purple-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Prêt à offrir un souvenir inoubliable ?
        </h2>
        <a
          href="https://lifebook.fr"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          Créer un LifeBook maintenant
        </a>
      </section>
    </main>
  );
}
