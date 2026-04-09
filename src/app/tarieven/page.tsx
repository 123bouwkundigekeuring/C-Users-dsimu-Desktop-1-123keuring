import Link from "next/link";

export default function Tarieven() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tarieven
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Transparante, vaste prijzen. Geen verborgen kosten.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 lg:py-24 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bouwkundige keuring */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-amber">
              <div className="inline-block bg-amber text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">
                MEEST GEKOZEN
              </div>
              <h3 className="text-xl font-bold mb-2">Bouwkundige keuring</h3>
              <p className="text-gray-text text-sm mb-4">
                Uitgebreide inspectie van de woning
              </p>
              <div className="text-4xl font-bold text-navy mb-1">
                &euro;499
              </div>
              <p className="text-sm text-gray-text mb-6">incl. BTW, t/m 250m&sup2;</p>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Uitgebreid bouwkundig rapport
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Rapport binnen 24 uur
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Gecertificeerde inspecteur
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Rapport in 4 talen
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Kostenraming onderhoud
                </li>
              </ul>
              <Link
                href="/keuring-aanvragen"
                className="block text-center bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-3 rounded-lg transition-colors"
              >
                Direct inplannen
              </Link>
              <p className="text-xs text-gray-text mt-3 text-center">
                Toeslag: &euro;0,75/m&sup2; boven 250m&sup2;
              </p>
            </div>

            {/* Funderingsonderzoek */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2 mt-8">Funderingsonderzoek</h3>
              <p className="text-gray-text text-sm mb-4">
                Professioneel onderzoek naar de fundering
              </p>
              <div className="text-4xl font-bold text-navy mb-1">
                &euro;379
              </div>
              <p className="text-sm text-gray-text mb-6">incl. BTW</p>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Visuele inspectie fundering
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Lintvoegmeting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Funderingsrapport
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Advies en aanbevelingen
                </li>
              </ul>
              <Link
                href="/funderingsonderzoek"
                className="block text-center border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Meer informatie
              </Link>
            </div>

            {/* Combi-deal */}
            <div className="bg-navy text-white rounded-2xl p-8">
              <div className="inline-block bg-amber text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">
                BESPAAR &euro;129
              </div>
              <h3 className="text-xl font-bold mb-2">Combi-deal</h3>
              <p className="text-gray-300 text-sm mb-4">
                Keuring + funderingsonderzoek
              </p>
              <div className="text-4xl font-bold text-amber mb-1">
                Vanaf &euro;749
              </div>
              <p className="text-sm text-gray-300 mb-6">incl. BTW</p>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Alles van bouwkundige keuring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Alles van funderingsonderzoek
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Gecombineerd rapport
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  &euro;129 voordeliger
                </li>
              </ul>
              <Link
                href="/keuring-aanvragen"
                className="block text-center bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-3 rounded-lg transition-colors"
              >
                Direct inplannen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Veelgestelde vragen
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Wat is een bouwkundige keuring?",
                a: "Een bouwkundige keuring is een uitgebreide inspectie van een woning waarbij de bouwkundige staat wordt beoordeeld. U krijgt inzicht in mogelijke gebreken, nodig onderhoud en een kostenraming.",
              },
              {
                q: "Hoe snel ontvang ik het rapport?",
                a: "U ontvangt het rapport binnen 24 uur na de inspectie. Het rapport is beschikbaar in het Nederlands, Engels, Duits en Frans.",
              },
              {
                q: "Wat kost een bouwkundige keuring?",
                a: "Een bouwkundige keuring kost \u20AC499 incl. BTW voor woningen tot 250m\u00B2. Voor grotere woningen geldt een toeslag van \u20AC0,75 per m\u00B2.",
              },
              {
                q: "Wanneer heb ik een funderingsonderzoek nodig?",
                a: "Een funderingsonderzoek is aan te raden bij woningen van voor 1970, bij zichtbare scheuren in gevels, of als de woning in een risicogebied voor funderingsproblemen staat.",
              },
              {
                q: "Kan ik het rapport in het Engels ontvangen?",
                a: "Ja, wij leveren rapporten in 4 talen: Nederlands, Engels, Duits en Frans. U kunt uw voorkeurstaal aangeven bij het aanvragen.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-text">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-navy to-navy-light text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Klaar om uw keuring in te plannen?
          </h2>
          <p className="text-gray-300 mb-8">
            Vaste prijs &euro;499. Rapport binnen 24 uur. In uw taal.
          </p>
          <Link
            href="/keuring-aanvragen"
            className="inline-block bg-amber hover:bg-amber-hover text-navy-dark font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Nu inplannen
          </Link>
        </div>
      </section>
    </>
  );
}
