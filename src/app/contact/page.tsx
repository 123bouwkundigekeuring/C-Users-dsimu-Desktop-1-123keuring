"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: "",
    telefoon: "",
    email: "",
    onderwerp: "",
    bericht: "",
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
          <div className="inline-block bg-white/10 text-sm px-4 py-1.5 rounded-full mb-6">
            Wij reageren doorgaans binnen een werkdag
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Neem contact op
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Heeft u een vraag over een keuring, onze tarieven of iets anders? Neem
            gerust contact met ons op.
          </p>
        </div>
      </section>

      {/* Contact info + photo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/contact-photo.jpg"
                alt="Inspecteur 123 Bouwkundige Keuring"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Contact details */}
            <div>
              <div className="space-y-6 mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contactgegevens</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-text">E-mail</div>
                        <a
                          href="mailto:info@123bouwkundigekeuring.nl"
                          className="font-medium text-navy hover:text-amber transition-colors"
                        >
                          info@123bouwkundigekeuring.nl
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-text">Openingstijden</div>
                        <div className="font-medium">Ma – Vr: 8:00 – 18:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-navy text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Direct een keuring inplannen?
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Plan uw bouwkundige keuring in via onze online agenda.
                </p>
                <Link
                  href="/keuring-aanvragen"
                  className="block text-center bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-3 rounded-lg transition-colors"
                >
                  Keuring aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Stuur ons een bericht
          </h2>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Bericht verzonden!
              </h3>
              <p className="text-green-700">
                Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u
                op.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="naam"
                    className="block text-sm font-medium mb-2"
                  >
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
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefoon"
                    className="block text-sm font-medium mb-2"
                  >
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                    placeholder="Uw telefoonnummer"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-mailadres <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
                  placeholder="uw@email.nl"
                />
              </div>

              <div>
                <label
                  htmlFor="onderwerp"
                  className="block text-sm font-medium mb-2"
                >
                  Onderwerp
                </label>
                <select
                  id="onderwerp"
                  name="onderwerp"
                  value={formData.onderwerp}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent bg-white"
                >
                  <option value="">Selecteer een onderwerp</option>
                  <option value="keuring">Keuring aanvragen</option>
                  <option value="tarieven">Vraag over tarieven</option>
                  <option value="rapport">Vraag over rapport</option>
                  <option value="technisch">Technische vraag</option>
                  <option value="klacht">Klacht / feedback</option>
                  <option value="overig">Overig</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="bericht"
                  className="block text-sm font-medium mb-2"
                >
                  Bericht <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  required
                  rows={5}
                  value={formData.bericht}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent resize-vertical"
                  placeholder="Uw bericht..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-4 rounded-lg text-lg transition-colors"
              >
                Verstuur bericht
              </button>
            </form>
          )}
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
