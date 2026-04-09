import Link from "next/link";

export default function Funderingsonderzoek() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Funderingsonderzoek
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Professioneel onderzoek naar de staat van de fundering van uw woning.
          </p>
        </div>
      </section>

      {/* Wat is het */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Wat is een funderingsonderzoek?
              </h2>
              <p className="text-gray-text mb-4">
                Een funderingsonderzoek brengt de staat van de fundering van een
                woning in kaart. Dit is vooral belangrijk bij oudere woningen
                (voor 1970) en woningen in gebieden met bekende
                funderingsproblemen.
              </p>
              <p className="text-gray-text mb-4">
                Onze inspecteurs voeren een visuele inspectie uit, meten
                lintvoegen en beoordelen eventuele scheefstand of scheuren in de
                gevel.
              </p>
              <p className="text-gray-text">
                Na het onderzoek ontvangt u een uitgebreid rapport met onze
                bevindingen en aanbevelingen.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Wanneer is het nodig?
              </h2>
              <ul className="space-y-4">
                {[
                  "Woning gebouwd voor 1970",
                  "Zichtbare scheuren in gevels of muren",
                  "Woning op houten paalfundering",
                  "Bekend risicogebied voor funderingsproblemen",
                  "Bij aankoop van een oudere woning",
                  "Scheefstand van de woning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-amber font-bold mt-0.5">&#10003;</span>
                    <span className="text-gray-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Tarieven funderingsonderzoek
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Funderingsonderzoek</h3>
              <p className="text-gray-text text-sm mb-4">Los onderzoek</p>
              <div className="text-4xl font-bold text-navy mb-6">
                &euro;379
                <span className="text-sm font-normal text-gray-text ml-2">
                  incl. BTW
                </span>
              </div>
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
                  Uitgebreid funderingsrapport
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber font-bold">&#10003;</span>
                  Advies en aanbevelingen
                </li>
              </ul>
              <Link
                href="/keuring-aanvragen"
                className="block text-center border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Onderzoek aanvragen
              </Link>
            </div>
            <div className="bg-navy text-white rounded-2xl p-8 border-2 border-amber">
              <div className="inline-block bg-amber text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">
                BESPAAR &euro;129
              </div>
              <h3 className="text-xl font-bold mb-2">Combi-deal</h3>
              <p className="text-gray-300 text-sm mb-4">
                Bouwkundige keuring + funderingsonderzoek
              </p>
              <div className="text-4xl font-bold text-amber mb-6">
                Vanaf &euro;749
                <span className="text-sm font-normal text-gray-300 ml-2">
                  incl. BTW
                </span>
              </div>
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
                  &euro;129 voordeliger dan los
                </li>
              </ul>
              <Link
                href="/keuring-aanvragen"
                className="block text-center bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-3 rounded-lg transition-colors"
              >
                Combi-deal aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-navy to-navy-light text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Vragen over funderingsonderzoek?
          </h2>
          <p className="text-gray-300 mb-8">
            Neem contact met ons op voor advies op maat.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber hover:bg-amber-hover text-navy-dark font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
