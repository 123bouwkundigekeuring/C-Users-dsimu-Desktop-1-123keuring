import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <span className="bg-amber text-navy-dark px-2 py-0.5 rounded font-extrabold text-sm">
                123
              </span>
              <span className="text-white text-sm">BOUWKUNDIGE KEURING</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Professionele bouwkundige keuringen door gecertificeerde inspecteurs.
              Rapport binnen 24 uur.
            </p>
          </div>

          {/* Keuring links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Keuring
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/keuring-aanvragen" className="hover:text-white transition-colors">
                  Aanvragen
                </Link>
              </li>
              <li>
                <Link href="/tarieven" className="hover:text-white transition-colors">
                  Tarieven
                </Link>
              </li>
              <li>
                <Link href="/kennisbank" className="hover:text-white transition-colors">
                  Kennisbank
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Funderingsonderzoek */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Funderingsonderzoek
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/funderingsonderzoek" className="hover:text-white transition-colors">
                  Meer informatie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@123bouwkundigekeuring.nl"
                  className="hover:text-white transition-colors"
                >
                  info@123bouwkundigekeuring.nl
                </a>
              </li>
              <li>Ma - Vr: 8:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} 123 Bouwkundige Keuring. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/voorwaarden" className="hover:text-white transition-colors">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
