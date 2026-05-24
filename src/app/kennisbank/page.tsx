import Link from "next/link";

const articles = [
  {
    title: "Bouwkundige Keuring in de Randstad",
    summary:
      "Alles over bouwkundige keuringen in Amsterdam, Den Haag, Rotterdam, Utrecht en alle grote steden in de Randstad. Lokale kennis per stad.",
    slug: "/bouwkundige-keuring-randstad",
  },
  {
    title: "Wat is een bouwkundige keuring?",
    summary:
      "Een bouwkundige keuring is een uitgebreide inspectie van een woning. Leer wat er precies wordt beoordeeld en waarom het belangrijk is.",
    slug: "#wat-is-een-bouwkundige-keuring",
  },
  {
    title: "Waarom een keuring bij aankoop?",
    summary:
      "Ontdek waarom een bouwkundige keuring essentieel is voordat u een woning koopt. Voorkom onverwachte kosten en versterk uw onderhandelingspositie.",
    slug: "#waarom-keuring-bij-aankoop",
  },
  {
    title: "Funderingsproblemen herkennen",
    summary:
      "Leer de signalen herkennen van mogelijke funderingsproblemen, zoals scheuren, scheefstand en vochtproblemen.",
    slug: "#funderingsproblemen-herkennen",
  },
  {
    title: "Het bouwkundig rapport uitgelegd",
    summary:
      "Wat staat er precies in een bouwkundig rapport? Wij leggen alle onderdelen stap voor stap uit.",
    slug: "#bouwkundig-rapport-uitgelegd",
  },
  {
    title: "Onderhoud plannen na een keuring",
    summary:
      "Na de keuring heeft u een kostenraming. Maar hoe plant u het onderhoud slim in? Tips en advies.",
    slug: "#onderhoud-plannen",
  },
  {
    title: "Veelgestelde vragen over bouwkundige keuringen",
    summary:
      "Antwoorden op de meest gestelde vragen over bouwkundige keuringen, kosten, doorlooptijd en meer.",
    slug: "#veelgestelde-vragen",
  },
];

export default function Kennisbank() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Kennisbank
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Alles wat u moet weten over bouwkundige keuringen en
            funderingsonderzoek.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-24 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link key={article.title} href={article.slug}>
                <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <h2 className="text-lg font-bold mb-3">{article.title}</h2>
                  <p className="text-gray-text text-sm mb-4">
                    {article.summary}
                  </p>
                  <span className="text-amber font-semibold text-sm">
                    Lees meer &rarr;
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-navy to-navy-light text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Heeft u nog vragen?
          </h2>
          <p className="text-gray-300 mb-8">
            Neem gerust contact met ons op. Wij helpen u graag verder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-amber hover:bg-amber-hover text-navy-dark font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
            >
              Neem contact op
            </Link>
            <Link
              href="/keuring-aanvragen"
              className="inline-block border border-white/30 hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
            >
              Keuring aanvragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
