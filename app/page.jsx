export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100 text-gray-800 font-sans">
      <section className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight drop-shadow-md">
          Offrez un moment, créez un souvenir éternel
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-700">
          Pour la Fête des Pères, partagez un instant précieux et transformez-le en un livre unique avec LifeBook.
        </p>
        <a
          href="https://lifebook.fr"
          className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Découvrir LifeBook
        </a>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 transition-all hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%201.png" alt="Moment père-fils" className="rounded-xl mb-5 w-full h-60 object-cover" />
          <h3 className="font-bold text-xl mb-3 text-purple-700">Souvenirs précieux</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Discutez ensemble, racontez les grands moments, et construisez un récit sur mesure.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-6 transition-all hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%202.png" alt="Interview avec LifeBook" className="rounded-xl mb-5 w-full h-60 object-cover" />
          <h3 className="font-bold text-xl mb-3 text-purple-700">Interview guidée</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Laissez-vous guider pas à pas, depuis votre téléphone, sans pression ni contrainte.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-6 transition-all hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/Manupri974/images/refs/heads/main/landing%20image%203.png" alt="Livre personnalisé" className="rounded-xl mb-5 w-full h-60 object-cover" />
          <h3 className="font-bold text-xl mb-3 text-purple-700">Un livre à offrir</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Livraison numérique ou imprimée : un cadeau vivant et rempli d’émotions.
          </p>
        </div>
      </section>
    </main>
  );
}
