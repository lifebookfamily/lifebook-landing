export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100 text-gray-800 font-sans">
      {/* HERO */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 text-center space-y-8 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 drop-shadow-sm">
          Offrez un moment, créez un souvenir éternel
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-700">
          Pour la Fête des Pères, partagez un instant précieux et transformez-le en un livre unique avec LifeBook.
        </p>
        <a
          href="https://lifebook.fr"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md transition-transform hover:scale-105"
        >
          Découvrir LifeBook
        </a>
      </section>

      {/* BÉNÉFICES */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Souvenirs précieux",
            image: "https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%201.png",
            desc: "Discutez ensemble, racontez les grands moments, et construisez un récit sur mesure.",
          },
          {
            title: "Interview guidée",
            image: "https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%202.png",
            desc: "Laissez-vous guider pas à pas, depuis votre téléphone, sans pression ni contrainte.",
          },
          {
            title: "Un livre à offrir",
            image: "https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%203.png",
            desc: "Livraison numérique ou imprimée : un cadeau vivant et rempli d’émotions.",
          },
        ].map(({ title, image, desc }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-6 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <img
              src={image}
              alt={title}
              className="rounded-2xl mb-5 w-full h-52 object-cover shadow-md transition-transform hover:scale-105"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
