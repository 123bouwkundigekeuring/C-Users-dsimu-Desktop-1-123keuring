import Link from "next/link";

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Professionele bouwkundige keuring
          <br />
          <span className="text-amber">voor uw woning</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Plan direct een keuring in via onze online agenda. Rapport binnen 24
          uur, in uw eigen taal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/keuring-aanvragen"
            className="bg-amber hover:bg-amber-hover text-navy-dark font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            Keuring inplannen
          </Link>
          <a
            href="mailto:info@123bouwkundigekeuring.nl"
            className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            Mail ons direct
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "500+", label: "Keuringen uitgevoerd" },
    { value: "4.9\u2605", label: "Gemiddelde beoordeling" },
    { value: "24u", label: "Rapport levertijd" },
    { value: "4", label: "Talen beschikbaar" },
  ];

  return (
    <section className="bg-amber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl lg:text-3xl font-bold text-navy-dark">
                {stat.value}
              </div>
              <div className="text-sm text-navy-dark/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCards() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
          Waarvoor bent u hier?
        </h2>
        <p className="text-gray-text text-center mb-12 max-w-2xl mx-auto">
          Wij verzorgen bouwkundige keuringen bij zowel aankoop als verkoop van
          woningen.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Aankoop */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-amber transition-colors">
            <div className="text-4xl mb-4">&#127968;</div>
            <h3 className="text-xl font-bold mb-4">Keuring bij aankoop</h3>
            <ul className="space-y-3 text-gray-text mb-8">
              <li className="flex items-start gap-2">
                <span className="text-amber font-bold mt-0.5">&#10003;</span>
                Inzicht in de bouwkundige staat
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber font-bold mt-0.5">&#10003;</span>
                Overzicht van direct nodige reparaties
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber font-bold mt-0.5">&#10003;</span>
                Kostenraming van onderhoud
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber font-bold mt-0.5">&#10003;</span>
                Onderhandelingspositie versterken
              </li>
            </ul>
            <Link
              href="/keuring-aanvragen"
              className="block text-center bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-3 rounded-lg transition-colors"
            >
              Keuring inplannen bij aankoop
            </Link>
          </div>

          {/* Verkoop */}
          <div className="bg-navy text-white rounded-2xl p-8">
            <div className="text-4xl mb-4">&#127978;</div>
            <h3 className="text-xl font-bold mb-4">Keuring bij verkoop</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-amber font-bold mt-0.5">&#10003;</span>
                Transparantie richting kopers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber font-bold mt-0.5">&#10003;</span>
                Voorkom verrassingen na de verkoop
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber font-bold mt-0.5">&#10003;</span>
                Verhoog het vertrouwen
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber font-bold mt-0.5">&#10003;</span>
                Professioneel verkooprapport
              </li>
            </ul>
            <Link
              href="/keuring-aanvragen"
              className="block text-center bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-3 rounded-lg transition-colors"
            >
              Keuring inplannen bij verkoop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FunderingSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-navy to-navy-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
          Combineer uw keuring met funderingsonderzoek
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Bespaar door een bouwkundige keuring te combineren met een
          funderingsonderzoek.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold mb-2">Funderingsonderzoek</h3>
            <p className="text-gray-300 mb-4">Los funderingsonderzoek</p>
            <div className="text-3xl font-bold text-amber mb-6">
              &euro;379 <span className="text-sm font-normal text-gray-300">incl. BTW</span>
            </div>
            <Link
              href="/funderingsonderzoek"
              className="block text-center border border-white/30 hover:bg-white/10 font-semibold py-3 rounded-lg transition-colors"
            >
              Meer informatie
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border-2 border-amber">
            <div className="inline-block bg-amber text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">
              MEEST GEKOZEN
            </div>
            <h3 className="text-xl font-bold mb-2">Combi-deal</h3>
            <p className="text-gray-300 mb-4">
              Bouwkundige keuring + funderingsonderzoek
            </p>
            <div className="text-3xl font-bold text-amber mb-6">
              Vanaf &euro;749{" "}
              <span className="text-sm font-normal text-gray-300">incl. BTW</span>
            </div>
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
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Vul uw gegevens in",
      description: "In slechts ~2 minuten heeft u het formulier ingevuld.",
    },
    {
      number: "2",
      title: "Kies een datum en tijd",
      description: "Selecteer een moment dat u het beste uitkomt via onze agenda.",
    },
    {
      number: "3",
      title: "Ontvang uw rapport",
      description: "Binnen 24 uur ontvangt u een uitgebreid bouwkundig rapport.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
          Hoe het werkt
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-amber text-navy-dark font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Vaste, transparante prijs
        </h2>
        <p className="text-gray-text mb-12 max-w-2xl mx-auto">
          Geen verborgen kosten. U weet vooraf precies wat u betaalt.
        </p>
        <div className="max-w-md mx-auto bg-navy text-white rounded-2xl p-8 border-2 border-amber">
          <div className="text-5xl font-bold text-amber mb-2">&euro;499</div>
          <p className="text-gray-300 mb-6">incl. BTW, t/m 250m&sup2;</p>
          <p className="text-sm text-gray-400 mb-8">
            Toeslag: &euro;0,75/m&sup2; boven 250m&sup2;
          </p>
          <ul className="space-y-3 text-left mb-8">
            <li className="flex items-center gap-2">
              <span className="text-amber">&#10003;</span> Uitgebreid bouwkundig rapport
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber">&#10003;</span> Rapport binnen 24 uur
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber">&#10003;</span> Gecertificeerde inspecteur
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber">&#10003;</span> Rapport in uw eigen taal
            </li>
          </ul>
          <Link
            href="/keuring-aanvragen"
            className="block bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-4 rounded-lg text-lg transition-colors"
          >
            Direct inplannen
          </Link>
        </div>
      </div>
    </section>
  );
}

function LanguageSection() {
  const languages = [
    { flag: "\uD83C\uDDF3\uD83C\uDDF1", name: "Nederlands" },
    { flag: "\uD83C\uDDEC\uD83C\uDDE7", name: "English" },
    { flag: "\uD83C\uDDE9\uD83C\uDDEA", name: "Deutsch" },
    { flag: "\uD83C\uDDEB\uD83C\uDDF7", name: "Fran\u00e7ais" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Rapport in uw eigen taal
        </h2>
        <p className="text-gray-text mb-12 max-w-2xl mx-auto">
          Wij leveren uw bouwkundig rapport in 4 talen.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          {languages.map((lang) => (
            <div key={lang.name} className="flex flex-col items-center gap-2">
              <span className="text-5xl">{lang.flag}</span>
              <span className="text-sm font-medium text-gray-text">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Erik van der Berg",
      location: "Amsterdam",
      rating: 5,
      text: "Zeer professionele keuring. Het rapport was binnen een dag klaar en bijzonder gedetailleerd. Heeft ons geholpen bij de onderhandeling.",
    },
    {
      name: "Marieke Jansen",
      location: "Utrecht",
      rating: 5,
      text: "Fijn dat het rapport ook in het Engels beschikbaar was voor mijn partner. Duidelijk en overzichtelijk. Aanrader!",
    },
    {
      name: "Thomas de Wit",
      location: "Rotterdam",
      rating: 5,
      text: "Snelle service, eerlijk advies en een helder rapport. De inspecteur nam uitgebreid de tijd om alles te bekijken.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
          Wat onze klanten zeggen
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="text-amber text-lg mb-3">
                {"\u2605".repeat(t.rating)}
              </div>
              <p className="text-gray-text mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-text">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-navy to-navy-light text-white text-center">
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
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServiceCards />
      <FunderingSection />
      <HowItWorks />
      <PricingSection />
      <LanguageSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
