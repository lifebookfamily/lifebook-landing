import "./globals.css";

export default function Page() {
  return (
    <main className="min-h-screen font-sans text-gray-800 bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-32 px-6 text-center bg-gradient-to-br from-[#f3e8ff] via-[#fff0f5] to-white animate-fadeIn">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[900px] h-[900px] bg-purple-100 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 drop-shadow-xl">
            Pour la Fête des Pères, offrez plus qu’un cadeau : une mémoire vivante
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            LifeBook transforme vos souvenirs en livre imprimé ou numérique, grâce à l’intelligence artificielle.
          </p>
          <a
            href="#decouvrir"
            className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl transition-transform hover:scale-105"
          >
            Créer un LifeBook
          </a>
        </div>
      </section>

      {/* ÉTAPES */}
      <section id="decouvrir" className="py-32 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
          Comment ça marche ?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {["Répondez aux questions", "Laissez l’IA structurer l’histoire", "Recevez votre livre prêt à offrir"].map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xl mx-auto mb-6 shadow">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-32 px-6 bg-gradient-to-br from-pink-50 via-white to-fuchsia-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Un souvenir éternel",
              image: "https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%201.png",
              text: "Un livre que vos proches garderont toute leur vie, chargé d’émotion."
            },
            {
              title: "Design élégant",
              image: "https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%202.png",
              text: "Des mises en page soignées, un rendu premium aussi beau à lire qu’à offrir."
            },
            {
              title: "Livraison rapide",
              image: "https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%203.png",
              text: "Recevez le livre imprimé ou numérique en quelques jours, prêt à offrir."
            }
          ].map(({ title, image, text }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 animate-fadeIn"
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

      {/* TÉMOIGNAGE */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Témoignage"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p className="text-lg text-gray-700 italic mb-4">
            “C’est le plus beau cadeau que j’ai pu offrir à mon père. Il en a pleuré. Merci LifeBook.”
          </p>
          <p className="text-sm text-gray-500">— Sophie M., utilisatrice LifeBook</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-purple-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Offrez un livre inoubliable pour la Fête des Pères
        </h2>
        <a
          href="https://lifebook.fr"
          className="inline-block bg-white text-purple-700 font-semibold text-lg px-10 py-4 rounded-full shadow-xl transition-transform hover:scale-105"
        >
          Commencer maintenant
        </a>
      </section>
    </main>
  );
}
