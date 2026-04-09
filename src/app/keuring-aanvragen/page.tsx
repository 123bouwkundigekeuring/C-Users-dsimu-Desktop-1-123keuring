"use client";

import { useState } from "react";

export default function KeuringAanvragen() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    adres: "",
    postcode: "",
    plaats: "",
    type: "",
    oppervlakte: "",
    bouwjaar: "",
    taal: "nl",
    opmerkingen: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Keuring aanvragen
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Vul onderstaand formulier in en wij nemen zo snel mogelijk contact
            met u op om een afspraak in te plannen.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-8 bg-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center text-navy-dark">
            <div>
              <div className="text-xl font-bold">1</div>
              <div className="text-sm font-medium">Gegevens invullen</div>
            </div>
            <div>
              <div className="text-xl font-bold">2</div>
              <div className="text-sm font-medium">Datum kiezen</div>
            </div>
            <div>
              <div className="text-xl font-bold">3</div>
              <div className="text-sm font-medium">Rapport ontvangen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Aanvraag ontvangen!
              </h3>
              <p className="text-green-700">
                Bedankt voor uw aanvraag. Wij nemen binnen 1 werkdag contact met u
                op om een datum in te plannen.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm space-y-6"
            >
              <h2 className="text-xl font-bold mb-2">Uw gegevens</h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="naam" className="block text-sm font-medium mb-2">
                    Naam <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    value={formData.naam}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefoon" className="block text-sm font-medium mb-2">
                  Telefoon
                </label>
                <input
                  type="tel"
                  id="telefoon"
                  name="telefoon"
                  value={formData.telefoon}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                />
              </div>

              <h2 className="text-xl font-bold mb-2 pt-4">Woninggegevens</h2>

              <div>
                <label htmlFor="adres" className="block text-sm font-medium mb-2">
                  Adres van de woning <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="adres"
                  name="adres"
                  required
                  value={formData.adres}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                  placeholder="Straat en huisnummer"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium mb-2">
                    Postcode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                    placeholder="1234 AB"
                  />
                </div>
                <div>
                  <label htmlFor="plaats" className="block text-sm font-medium mb-2">
                    Plaats <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="plaats"
                    name="plaats"
                    required
                    value={formData.plaats}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium mb-2">
                    Type keuring
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent bg-white"
                  >
                    <option value="">Selecteer</option>
                    <option value="aankoop">Bij aankoop</option>
                    <option value="verkoop">Bij verkoop</option>
                    <option value="combi">Combi (+ fundering)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="oppervlakte" className="block text-sm font-medium mb-2">
                    Oppervlakte (m&sup2;)
                  </label>
                  <input
                    type="number"
                    id="oppervlakte"
                    name="oppervlakte"
                    value={formData.oppervlakte}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                    placeholder="bijv. 120"
                  />
                </div>
                <div>
                  <label htmlFor="bouwjaar" className="block text-sm font-medium mb-2">
                    Bouwjaar
                  </label>
                  <input
                    type="number"
                    id="bouwjaar"
                    name="bouwjaar"
                    value={formData.bouwjaar}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                    placeholder="bijv. 1985"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="taal" className="block text-sm font-medium mb-2">
                  Gewenste taal rapport
                </label>
                <select
                  id="taal"
                  name="taal"
                  value={formData.taal}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent bg-white"
                >
                  <option value="nl">Nederlands</option>
                  <option value="en">English</option>
                  <option value="de">Deutsch</option>
                  <option value="fr">Fran&ccedil;ais</option>
                </select>
              </div>

              <div>
                <label htmlFor="opmerkingen" className="block text-sm font-medium mb-2">
                  Opmerkingen
                </label>
                <textarea
                  id="opmerkingen"
                  name="opmerkingen"
                  rows={4}
                  value={formData.opmerkingen}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent resize-vertical"
                  placeholder="Eventuele opmerkingen of vragen..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-4 rounded-lg text-lg transition-colors"
              >
                Aanvraag versturen
              </button>

              <p className="text-center text-sm text-gray-text">
                Vaste prijs: &euro;499 incl. BTW (t/m 250m&sup2;)
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
