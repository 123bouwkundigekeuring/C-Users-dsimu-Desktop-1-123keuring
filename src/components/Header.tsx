"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/keuring-aanvragen", label: "Keuring aanvragen" },
    { href: "/tarieven", label: "Tarieven" },
    { href: "/funderingsonderzoek", label: "Funderingsonderzoek" },
    { href: "/kennisbank", label: "Kennisbank" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="bg-amber text-navy-dark px-2 py-0.5 rounded font-extrabold text-sm">
              123
            </span>
            <span className="text-white text-sm sm:text-base">
              BOUWKUNDIGE KEURING
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/keuring-aanvragen"
              className="bg-amber hover:bg-amber-hover text-navy-dark font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Direct inplannen
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/keuring-aanvragen"
              className="mt-3 block text-center bg-amber hover:bg-amber-hover text-navy-dark font-semibold py-2.5 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Direct inplannen
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
