export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100 text-gray-800 font-sans">
      <section className="w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Créez un livre à partir de vos souvenirs
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10">
          Pour la Fête des Pères, offrez un moment unique de partage : racontez son histoire, ensemble.
        </p>
        <a
          href="https://lifebook.fr"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all"
        >
          Découvrir LifeBook
        </a>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <img src="/image1.jpg" alt="Moment père-fils" className="rounded-xl mb-4" />
          <h3 className="font-semibold text-xl mb-2">Souvenirs précieux</h3>
          <p className="text-sm text-gray-600">
            Discutez ensemble, racontez les grands moments, et construisez un récit sur mesure.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <img src="/image2.jpg" alt="Interview avec LifeBook" className="rounded-xl mb-4" />
          <h3 className="font-semibold text-xl mb-2">Interview guidée</h3>
          <p className="text-sm text-gray-600">
            Laissez-vous guider pas à pas, depuis votre téléphone, sans pression.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <img src="/image3.jpg" alt="Livre personnalisé" className="rounded-xl mb-4" />
          <h3 className="font-semibold text-xl mb-2">Un livre à offrir</h3>
          <p className="text-sm text-gray-600">
            Livraison numérique ou imprimée : un souvenir vivant, prêt à transmettre.
          </p>
        </div>
      </section>
    </main>
  );
}
