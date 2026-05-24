import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bouwkundige Keuring in de Randstad | Amsterdam, Den Haag, Rotterdam, Utrecht | 123 Bouwkundige Keuring",
  description:
    "Professionele bouwkundige keuring in de Randstad. Actief in Amsterdam, Zaandam, Amstelveen, Haarlem, Den Haag, Rotterdam, Utrecht en meer. Rapport binnen 24 uur. Vaste prijs €499.",
  openGraph: {
    title: "Bouwkundige Keuring in de Randstad | 123 Bouwkundige Keuring",
    description:
      "Professionele bouwkundige keuring in alle grote steden van de Randstad. Vaste prijs, rapport binnen 24 uur.",
  },
};

const steden = [
  {
    naam: "Amsterdam",
    slug: "amsterdam",
    inwoners: "920.000+",
    beschrijving:
      "Amsterdam kent een enorm diverse woningvoorraad: van monumentale grachtenpanden uit de 17e eeuw tot moderne nieuwbouw in IJburg en Noord. De stad staat bekend om haar uitdagende funderingssituatie door de slappe veengrond.",
    veelvoorkomend: [
      "Funderingsproblemen door houten paalfunderingen (vooroorlogse bouw)",
      "Vochtproblemen in kelders en souterrains van grachtenpanden",
      "Achterstallig onderhoud bij etagewoningen",
      "Scheefstand in vooroorlogse panden",
      "Loden leidingen in woningen van voor 1960",
    ],
    woningtypes:
      "Grachtenpanden, herenhuizen, portiekflats (jaren ’30), galerij\xADflats (jaren ’60-’70), nieuwbouw appartementen",
    tip: "In Amsterdam is een funderingsonderzoek bij woningen van voor 1970 sterk aan te raden. De stad heeft naar schatting 250.000 woningen met een houten paalfundering.",
  },
  {
    naam: "Zaandam",
    slug: "zaandam",
    inwoners: "80.000+",
    beschrijving:
      "Zaandam en de bredere Zaanstreek kennen een rijke industriële geschiedenis. Veel woningen dateren uit de vroege 20e eeuw en staan op veengrond, wat funderingsproblemen tot een veelvoorkomend risico maakt.",
    veelvoorkomend: [
      "Funderingsproblemen door slappe veenbodem",
      "Vochtproblemen in kruipruimtes",
      "Houtrot bij oudere houten geveldelen (typisch Zaans)",
      "Achterstallig onderhoud dak en goten",
      "Asbesthoudende materialen in naoorlogse woningen",
    ],
    woningtypes:
      "Zaanse houten huizen, rijtjeswoningen (jaren ’30 en ’60-’70), twee-onder-een-kapwoningen, nieuwbouw",
    tip: "De typische Zaanse houten huizen vereisen extra aandacht voor houtrot en de staat van de gevelbekleding. Combineer uw keuring met een funderingsonderzoek.",
  },
  {
    naam: "Amstelveen",
    slug: "amstelveen",
    inwoners: "92.000+",
    beschrijving:
      "Amstelveen is een populaire woonstad met veel gezinswoningen. De gemeente kent een mix van naoorlogse wijken en moderne nieuwbouw, met relatief hoge woningprijzen vanwege de nabijheid van Amsterdam.",
    veelvoorkomend: [
      "Betonrot bij flats uit de jaren ’60-’70",
      "Achterstallig onderhoud aan platte daken",
      "Vochtproblemen in kruipruimtes",
      "Verouderde elektrische installaties",
      "Isolatieproblemen bij naoorlogse woningen",
    ],
    woningtypes:
      "Rijtjeswoningen, twee-onder-een-kap, vrijstaande woningen, appartementencomplexen (jaren ’60-’80), nieuwbouw",
    tip: "Bij de populaire jaren ’70-woningen in Amstelveen is extra aandacht nodig voor de staat van platte daken en eventuele asbesthoudende materialen.",
  },
  {
    naam: "Haarlem",
    slug: "haarlem",
    inwoners: "165.000+",
    beschrijving:
      "Haarlem heeft een prachtig historisch centrum met veel monumentale panden. De stad biedt een mix van vooroorlogse woningen in het centrum en naoorlogse wijken zoals Schalkwijk.",
    veelvoorkomend: [
      "Funderingsproblemen bij vooroorlogse panden in het centrum",
      "Vochtdoorslag bij oude metselwerk\xADgevels",
      "Houtaantasting door boktor of zwam",
      "Verouderde riolering",
      "Achterstallig onderhoud aan monumentale panden",
    ],
    woningtypes:
      "Herenhuizen, vooroorlogse stadswoningen, portiekflats, eengezinswoningen, nieuwbouw",
    tip: "In het historische centrum van Haarlem adviseren wij altijd een uitgebreide keuring inclusief funderingscheck vanwege de hoge ouderdom van veel panden.",
  },
  {
    naam: "Hoofddorp",
    slug: "hoofddorp",
    inwoners: "80.000+",
    beschrijving:
      "Hoofddorp is het centrum van de gemeente Haarlemmermeer en groeit snel. De meeste woningen dateren uit de jaren ’80-’2000, met veel nieuwbouw\xADprojecten in ontwikkeling.",
    veelvoorkomend: [
      "Scheuren door zettingsverschillen (droogmakerij)",
      "Vochtproblemen in kruipruimtes",
      "Gebreken aan kunststof kozijnen (jaren ’90)",
      "Problemen met platte daken",
      "Achterstallig onderhoud aan gevels",
    ],
    woningtypes:
      "Rijtjeswoningen (jaren ’80-’2000), twee-onder-een-kap, vrijstaande woningen, nieuwbouw appartementen",
    tip: "Hoofddorp ligt in de Haarlemmermeer\xADpolder. Door de kleigrond kunnen zettingsproblemen ontstaan, vooral bij uitbouwen en aanbouwen.",
  },
  {
    naam: "Den Haag",
    slug: "den-haag",
    inwoners: "550.000+",
    beschrijving:
      "Den Haag is een stad met grote contrasten: van statige herenhuizen in het Statenkwartier tot naoorlogse flats in Zuidwest. De woningmarkt is divers en de prijzen stijgen gestaag.",
    veelvoorkomend: [
      "Asbesthoudende materialen in naoorlogse woningen",
      "Funderingsproblemen in oudere wijken",
      "Vochtproblemen door opkomend grondwater",
      "Verouderde gasleidingen en elektra",
      "Betonrot bij galerijflats uit de jaren ’60",
    ],
    woningtypes:
      "Herenhuizen, bovenbenedenwoningen, portiek- en galerijflats, rijtjeswoningen, Vinex-woningen (Leidschenveen/Ypenburg)",
    tip: "In wijken als Transvaal, Schilderswijk en Laak is extra aandacht voor de fundering en de algehele bouwkundige staat essentieel vanwege de ouderdom van de woningvoorraad.",
  },
  {
    naam: "Delft",
    slug: "delft",
    inwoners: "105.000+",
    beschrijving:
      "Delft combineert een historische binnenstad met moderne woonwijken. De stad heeft veel studentenwoningen maar ook aantrekkelijke gezinswijken met een mix van oud en nieuw.",
    veelvoorkomend: [
      "Funderingsproblemen bij grachten\xADpanden",
      "Vochtproblemen in historische kelders",
      "Achterstallig onderhoud bij voormalige studentenwoningen",
      "Houtrot bij oudere kozijnen",
      "Scheuren in metselwerk door zetting",
    ],
    woningtypes:
      "Grachtenpanden, stadswoningen, rijtjeswoningen, appartementen, nieuwbouw (TU-wijk)",
    tip: "De historische binnenstad van Delft kent vergelijkbare funderingsrisico’s als Amsterdam. Laat altijd de fundering meenemen in uw keuring.",
  },
  {
    naam: "Zoetermeer",
    slug: "zoetermeer",
    inwoners: "130.000+",
    beschrijving:
      "Zoetermeer is een typische groeistad die vooral in de jaren ’70 en ’80 sterk is uitgebreid. De meeste woningen zijn relatief jong maar kunnen toch gebreken vertonen.",
    veelvoorkomend: [
      "Asbesthoudende materialen (dakplaten, kit)",
      "Problemen met platte daken",
      "Scheurvorming door zettingen",
      "Verouderde CV-installaties",
      "Vochtproblemen in kruipruimtes",
    ],
    woningtypes:
      "Rijtjeswoningen (jaren ’70-’80), twee-onder-een-kap, drive-in woningen, appartementen, nieuwbouw",
    tip: "Woningen uit de jaren ’70 en ’80 in Zoetermeer bevatten regelmatig asbest. Onze inspecteurs signaleren verdachte materialen tijdens de keuring.",
  },
  {
    naam: "Leiden",
    slug: "leiden",
    inwoners: "130.000+",
    beschrijving:
      "Leiden is een historische universiteitsstad met een gevarieerde woningmarkt. Van eeuwenoude panden langs de grachten tot moderne nieuwbouw in het Bio Science Park.",
    veelvoorkomend: [
      "Funderingsproblemen bij historische panden",
      "Vochtproblemen in kelders en souterrains",
      "Houtaantasting in vooroorlogse woningen",
      "Loden leidingen in oudere panden",
      "Achterstallig onderhoud bij studentenverhuur",
    ],
    woningtypes:
      "Grachtenpanden, herenhuizen, portiekwoningen, rijtjeswoningen, nieuwbouw appartementen",
    tip: "De Leidse binnenstad heeft vergelijkbare risico’s als andere historische steden. Een funderingsonderzoek is bij oudere panden altijd aan te raden.",
  },
  {
    naam: "Rotterdam",
    slug: "rotterdam",
    inwoners: "660.000+",
    beschrijving:
      "Rotterdam is na het bombardement van 1940 grotendeels herbouwd, wat resulteert in veel naoorlogse architectuur. De stad kent ook moderne iconische bouwwerken en een bruisende woningmarkt.",
    veelvoorkomend: [
      "Betonrot bij naoorlogse flats en galerij\xADwoningen",
      "Funderingsproblemen in Rotterdam-Zuid",
      "Asbesthoudende materialen in woningen uit de jaren ’50-’70",
      "Vochtproblemen bij souterrainwoningen",
      "Verouderde installaties in wederopbouwwoningen",
    ],
    woningtypes:
      "Wederopbouwwoningen, portiek- en galerijflats, herenhuizen (Kralingen), rijtjeswoningen, hoogbouw, nieuwbouw (Kop van Zuid)",
    tip: "Rotterdam-Zuid kent veel woningen met funderingsproblemen. Ons combi-pakket (keuring + funderingsonderzoek) is hier bijzonder populair.",
  },
  {
    naam: "Dordrecht",
    slug: "dordrecht",
    inwoners: "120.000+",
    beschrijving:
      "Dordrecht is de oudste stad van Holland met een indrukwekkend historisch centrum. De stad kent veel vooroorlogse woningen en ligt op een eiland, wat invloed heeft op grondwater en fundering.",
    veelvoorkomend: [
      "Funderingsproblemen door hoge grondwaterstand",
      "Vochtproblemen in historische panden",
      "Houtrot en zwamvorming",
      "Scheuren in gevels door zettingsverschillen",
      "Achterstallig onderhoud aan monumenten",
    ],
    woningtypes:
      "Monumentale panden, herenhuizen, rijtjeswoningen, naoorlogse flats, nieuwbouw (Stadswerven)",
    tip: "Door de ligging van Dordrecht is de grondwaterstand een belangrijk aandachtspunt. Funderingsonderzoek is bij oudere panden sterk aanbevolen.",
  },
  {
    naam: "Utrecht",
    slug: "utrecht",
    inwoners: "370.000+",
    beschrijving:
      "Utrecht is een van de snelst groeiende steden van Nederland. De historische binnenstad met haar unieke werfkelders trekt veel kopers, maar ook de nieuwbouwwijken Leidsche Rijn zijn enorm populair.",
    veelvoorkomend: [
      "Funderingsproblemen bij werfkelder\xADpanden",
      "Vochtproblemen in souterrains en kelders",
      "Scheefstand bij vooroorlogse panden",
      "Verouderde riolering in het centrum",
      "Achterstallig onderhoud bij bovenbenedenwoningen",
    ],
    woningtypes:
      "Werfkelderpanden, herenhuizen, portiekwoningen, rijtjeswoningen, Vinex (Leidsche Rijn), nieuwbouw",
    tip: "De Utrechtse werfkelders zijn uniek maar vormen ook een risico. Laat bij aankoop van een pand langs de gracht altijd een uitgebreid funderingsonderzoek uitvoeren.",
  },
  {
    naam: "Hilversum",
    slug: "hilversum",
    inwoners: "92.000+",
    beschrijving:
      "Hilversum, de mediastad van Nederland, staat bekend om zijn architectuur uit de Amsterdamse School en het Nieuwe Bouwen. De stad biedt veel ruime woningen op zandgrond.",
    veelvoorkomend: [
      "Achterstallig onderhoud bij villa’s en herenhuizen",
      "Houtaantasting (boktor) in dakkappen",
      "Verouderde elektrische installaties",
      "Problemen met platte daken (jaren ’60-’70)",
      "Vochtproblemen in kruipruimtes",
    ],
    woningtypes:
      "Villa’s, herenhuizen, Dudok-woningen, rijtjeswoningen, appartementen, nieuwbouw",
    tip: "Hilversum heeft relatief weinig funderingsproblemen dankzij de zandgrond, maar de vele karakteristieke woningen vragen wel om aandacht voor houtaantasting en dakconstructies.",
  },
  {
    naam: "Almere",
    slug: "almere",
    inwoners: "220.000+",
    beschrijving:
      "Almere is de jongste grote stad van Nederland, gebouwd op de bodem van het voormalige IJsselmeer. De stad bestaat voornamelijk uit woningen van na 1975 en groeit nog steeds.",
    veelvoorkomend: [
      "Zettingsproblemen door jonge poldergrond",
      "Scheuren in gevels en muren",
      "Problemen met platte daken en dakkapellen",
      "Vochtproblemen in kruipruimtes (hoge grondwaterstand)",
      "Gebreken aan kunststof kozijnen",
    ],
    woningtypes:
      "Rijtjeswoningen (jaren ’80-’2000), twee-onder-een-kap, vrijstaande woningen, appartementen, nieuwbouw",
    tip: "De poldergrond van Almere kan nog steeds werken en zetten. Scheuren in gevels zijn niet altijd cosmetisch — laat ze altijd beoordelen door een inspecteur.",
  },
  {
    naam: "Purmerend",
    slug: "purmerend",
    inwoners: "82.000+",
    beschrijving:
      "Purmerend is een groeiende stad ten noorden van Amsterdam. De stad heeft veel rijtjeswoningen uit de jaren ’70-’90 en breidt uit met nieuwbouw\xADwijken.",
    veelvoorkomend: [
      "Funderingsproblemen door veengrond",
      "Vochtproblemen in kruipruimtes",
      "Asbesthoudende materialen in jaren ’70-woningen",
      "Achterstallig onderhoud aan daken",
      "Scheuren door zettingsverschillen",
    ],
    woningtypes:
      "Rijtjeswoningen, twee-onder-een-kap, galerijflats, nieuwbouw",
    tip: "Purmerend ligt op veengrond. Vooral bij woningen met een kruipruimte is aandacht voor vocht en fundering essentieel.",
  },
  {
    naam: "Diemen",
    slug: "diemen",
    inwoners: "32.000+",
    beschrijving:
      "Diemen grenst direct aan Amsterdam en is populair bij kopers die de hoofdstad net te duur vinden. De stad heeft een mix van flats uit de jaren ’70 en moderne nieuwbouw.",
    veelvoorkomend: [
      "Betonrot bij galerijflats uit de jaren ’70",
      "Funderingsproblemen door slappe grond",
      "Vochtproblemen bij begane grondwoningen",
      "Verouderde installaties",
      "Geluidsoverlast door nabijheid snelwegen (isolatiecheck)",
    ],
    woningtypes:
      "Galerijflats, rijtjeswoningen, appartementen, nieuwbouw (Holland Park)",
    tip: "Bij de oudere flats in Diemen is een bouwkundige keuring extra belangrijk om de staat van beton, gevels en gemeenschappelijke delen te beoordelen.",
  },
];

const inspectieonderdelen = [
  {
    titel: "Fundering & constructie",
    beschrijving:
      "Beoordeling van de draagconstructie, fundering, vloeren en eventuele scheefstand of zettingsscheuren.",
  },
  {
    titel: "Dak & goten",
    beschrijving:
      "Inspectie van dakbedekking, dakconstructie, goten, boeiboorden en eventuele lekkages.",
  },
  {
    titel: "Gevels & metselwerk",
    beschrijving:
      "Controle op scheuren, vochtdoorslag, staat van voegwerk en gevelbekleding.",
  },
  {
    titel: "Kozijnen & beglazing",
    beschrijving:
      "Beoordeling van hout-, kunststof- of aluminium kozijnen, draaiende delen en isolatieglas.",
  },
  {
    titel: "Vochtproblemen",
    beschrijving:
      "Meting van vochtwaarden in muren, vloeren en kruipruimte. Signalering van optrekkend vocht of lekkages.",
  },
  {
    titel: "Installaties",
    beschrijving:
      "Globale beoordeling van elektra, waterleiding, riolering en CV-installatie op zichtbare gebreken.",
  },
  {
    titel: "Asbest & gevaarlijke stoffen",
    beschrijving:
      "Signalering van asbest\xADverdachte materialen en advies over eventueel nader onderzoek.",
  },
  {
    titel: "Kruipruimte & kelder",
    beschrijving:
      "Inspectie van de kruipruimte op vocht, ventilatie, isolatie en de staat van vloerbalken.",
  },
];

export default function BouwkundigeKeuringRandstad() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Bouwkundige Keuring in de Randstad
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Professionele bouwkundige keuringen in Amsterdam, Den Haag,
            Rotterdam, Utrecht en alle grote steden in de Randstad. Vaste prijs,
            rapport binnen 24 uur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/keuring-aanvragen"
              className="bg-amber hover:bg-amber-hover text-navy-dark font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Keuring inplannen
            </Link>
            <Link
              href="/tarieven"
              className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Bekijk tarieven
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Waarom een bouwkundige keuring in de Randstad extra belangrijk is
          </h2>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              De Randstad is het dichtstbevolkte gebied van Nederland en kent de
              hoogste woningprijzen. Bij een gemiddelde aankoopprijs van meer dan{" "}
              <strong>&euro;400.000</strong> wilt u zeker weten dat uw
              toekomstige woning in goede staat verkeert. Een bouwkundige keuring
              geeft u dat inzicht.
            </p>
            <p>
              De woningvoorraad in de Randstad is enorm divers: van 17e-eeuwse
              grachtenpanden in Amsterdam tot moderne Vinex-woningen in Leidsche
              Rijn. Elke regio en elk woningtype brengt specifieke
              aandachtspunten met zich mee. Onze gecertificeerde inspecteurs
              kennen de lokale situatie en weten precies waar ze op moeten
              letten.
            </p>
            <p>
              Veelvoorkomende problemen in de Randstad zijn{" "}
              <strong>funderingsproblemen</strong> (vooral in gebieden met
              veengrond), <strong>vochtproblemen</strong>,{" "}
              <strong>asbesthoudende materialen</strong> in naoorlogse woningen
              en <strong>achterstallig onderhoud</strong>. Een professionele
              keuring brengt deze risico&apos;s in kaart voordat u tot aankoop
              overgaat.
            </p>
          </div>
        </div>
      </section>

      {/* Steden overzicht */}
      <section className="py-4 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">
              Direct naar uw stad:
            </h2>
            <div className="flex flex-wrap gap-2">
              {steden.map((stad) => (
                <a
                  key={stad.slug}
                  href={`#${stad.slug}`}
                  className="bg-gray-light hover:bg-amber hover:text-navy-dark text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
                >
                  {stad.naam}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steden detail */}
      {steden.map((stad, index) => (
        <section
          key={stad.slug}
          id={stad.slug}
          className={index % 2 === 0 ? "py-16 bg-white" : "py-16 bg-gray-light"}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Bouwkundige keuring {stad.naam}
                </h2>
                <span className="text-sm bg-navy/10 text-navy px-3 py-1 rounded-full">
                  {stad.inwoners} inwoners
                </span>
              </div>
              <p className="text-gray-text leading-relaxed mb-6">
                {stad.beschrijving}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">
                  Veelvoorkomende gebreken in {stad.naam}
                </h3>
                <ul className="space-y-2">
                  {stad.veelvoorkomend.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-text">
                      <span className="text-amber font-bold mt-0.5 flex-shrink-0">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Woningtypes</h3>
                <p className="text-gray-text mb-6">{stad.woningtypes}</p>

                <div className="bg-amber/10 border border-amber/30 rounded-xl p-4">
                  <h4 className="font-bold text-sm text-navy mb-1">
                    Tip van onze inspecteur
                  </h4>
                  <p className="text-sm text-gray-text">{stad.tip}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/keuring-aanvragen"
                className="inline-block bg-amber hover:bg-amber-hover text-navy-dark font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Keuring aanvragen in {stad.naam}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Waar letten inspecteurs op */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
            Waar letten onze inspecteurs op?
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Tijdens een bouwkundige keuring inspecteren wij de woning op alle
            belangrijke onderdelen. Dit is wat wij controleren:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectieonderdelen.map((onderdeel) => (
              <div
                key={onderdeel.titel}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10"
              >
                <h3 className="font-bold mb-2">{onderdeel.titel}</h3>
                <p className="text-sm text-gray-300">
                  {onderdeel.beschrijving}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom 123 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Waarom kiezen voor 123 Bouwkundige Keuring?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                titel: "Vaste, transparante prijs",
                tekst:
                  "Geen verrassingen achteraf. U betaalt €499 incl. BTW voor woningen tot 250m². Geen kleine lettertjes.",
              },
              {
                titel: "Rapport binnen 24 uur",
                tekst:
                  "Na de inspectie ontvangt u binnen 24 uur een uitgebreid, professioneel rapport met foto’s en kostenraming.",
              },
              {
                titel: "Lokale kennis",
                tekst:
                  "Onze inspecteurs kennen de Randstad en weten precies welke gebreken typisch zijn voor uw regio en woningtype.",
              },
              {
                titel: "Rapport in 4 talen",
                tekst:
                  "Ideaal voor de internationale woningmarkt van de Randstad. Rapporten beschikbaar in NL, EN, DE en FR.",
              },
              {
                titel: "Gecertificeerde inspecteurs",
                tekst:
                  "Al onze bouwkundig inspecteurs zijn gecertificeerd en hebben jarenlange ervaring in de bouw.",
              },
              {
                titel: "500+ keuringen uitgevoerd",
                tekst:
                  "Met een gemiddelde beoordeling van 4.9 sterren zijn wij een van de best beoordeelde keuringsbedrijven.",
              },
            ].map((item) => (
              <div key={item.titel} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber font-bold">&#10003;</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.titel}</h3>
                  <p className="text-gray-text text-sm">{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Veelgestelde vragen over bouwkundige keuringen in de Randstad
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "In welke steden voeren jullie bouwkundige keuringen uit?",
                a: "Wij voeren bouwkundige keuringen uit in de gehele Randstad, waaronder Amsterdam, Zaandam, Amstelveen, Haarlem, Hoofddorp, Den Haag, Delft, Zoetermeer, Leiden, Rotterdam, Dordrecht, Utrecht, Hilversum, Almere, Purmerend en Diemen. Ook in omliggende gemeenten zijn wij actief.",
              },
              {
                q: "Wat kost een bouwkundige keuring in de Randstad?",
                a: "Een bouwkundige keuring kost €499 incl. BTW voor woningen tot 250m². Dit is een vaste prijs, ongeacht de locatie in de Randstad. Voor grotere woningen geldt een toeslag van €0,75 per m². Een funderingsonderzoek kost €379, of €749 als combi-deal met de bouwkundige keuring.",
              },
              {
                q: "Hoe snel kan een keuring plaatsvinden?",
                a: "In de meeste gevallen kunnen wij binnen enkele werkdagen een keuring inplannen. In drukke periodes kan dit iets langer duren. Plan uw keuring zo vroeg mogelijk in via ons online formulier.",
              },
              {
                q: "Heb ik altijd een funderingsonderzoek nodig?",
                a: "Niet altijd, maar in de Randstad raden wij het sterk aan bij woningen van voor 1970, vooral in gebieden met veengrond (Amsterdam, Zaandam, Purmerend) of bij zichtbare scheuren en scheefstand. Onze inspecteur adviseert u hierover tijdens de keuring.",
              },
              {
                q: "Wat als er gebreken worden gevonden?",
                a: "Ons rapport bevat een overzicht van alle gevonden gebreken, inclusief een kostenraming voor herstel. Dit kunt u gebruiken om te onderhandelen over de aankoopprijs of om een weloverwogen beslissing te nemen.",
              },
              {
                q: "Kan ik het rapport in het Engels ontvangen?",
                a: "Ja, wij leveren rapporten in het Nederlands, Engels, Duits en Frans. Dit is ideaal voor de internationale woningmarkt in de Randstad, vooral in steden als Amsterdam, Den Haag en Rotterdam waar veel expats wonen.",
              },
              {
                q: "Is een bouwkundige keuring verplicht?",
                a: "Een bouwkundige keuring is niet wettelijk verplicht, maar wordt sterk aanbevolen. Zeker in de Randstad, waar woningprijzen hoog zijn, kan een keuring u behoeden voor onverwachte kosten van duizenden euro’s.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-text">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-navy to-navy-light text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Klaar om uw keuring in te plannen?
          </h2>
          <p className="text-gray-300 mb-3">
            Wij zijn actief in de hele Randstad. Vaste prijs &euro;499. Rapport
            binnen 24 uur.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Amsterdam &bull; Zaandam &bull; Amstelveen &bull; Haarlem &bull;
            Den Haag &bull; Rotterdam &bull; Utrecht &bull; Leiden &bull;
            Delft &bull; Almere &bull; en meer
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
