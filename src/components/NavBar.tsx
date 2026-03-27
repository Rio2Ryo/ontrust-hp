"use client";

import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Applications", href: "#applications" },
    { label: "Technology", href: "#contact" },
    { label: "Company", href: "#company" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-sm border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center h-10 w-[150px] overflow-hidden">
          <img
            src="/ontrust-logo.png"
            alt="株式会社onTrust"
            className="h-16 w-auto max-w-none object-cover object-left"
          />
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#inquiry"
            className="hidden sm:inline-flex text-sm font-semibold text-white bg-trust-600 hover:bg-trust-700 px-5 py-2.5 rounded-full transition-colors"
          >
            Contact
          </a>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white text-ink hover:border-trust-300 hover:text-trust-600 transition-colors"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-200/70 bg-cream/95 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-white hover:text-trust-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              className="sm:hidden mt-2 inline-flex justify-center px-4 py-3 rounded-xl bg-trust-600 text-white font-semibold hover:bg-trust-700 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
