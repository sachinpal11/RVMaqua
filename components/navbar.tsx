"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="w-full border-b sticky top-0 border-gray-300 bg-white">
      <nav className="relative mx-auto flex max-w-7xl items-center px-4 py-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-heading font-bold text-gray-900">
          RVMAqua
        </Link>

        {/* Desktop Center Links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <NavLinks />
        </div>

        {/* Desktop WhatsApp CTA */}
        <div className="ml-auto hidden md:block">
          <WhatsAppButton />
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="ml-auto flex items-center md:hidden"
        >
          <span className="relative h-6 w-6">
            <span className="absolute left-0 top-1 h-0.5 w-full bg-black" />
            <span className="absolute left-0 top-1/2 h-0.5 w-full bg-black" />
            <span className="absolute left-0 bottom-1 h-0.5 w-full bg-black" />
          </span>
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Right Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 py-4">
          <span className="text-lg font-heading font-bold">RVMAqua</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-6 px-4 py-6">
          <NavLinks mobile onLinkClick={() => setOpen(false)} />
          <WhatsAppButton full />
        </div>
      </aside>
    </header>
  );
}

/* ---------- Types ---------- */

interface NavLinksProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

interface WhatsAppButtonProps {
  full?: boolean;
}

/* ---------- Components ---------- */

function NavLinks({
  mobile = false,
  onLinkClick,
}: NavLinksProps): React.ReactElement {
  const baseClass =
    "font-body text-gray-700 font-medium hover:text-gray-900 transition-colors";

  return (
    <>
      <Link
        href="/cafes-delhi"
        onClick={onLinkClick}
        className={`${baseClass} text-lg`}
      >
        Cafes & Restaurants
      </Link>

      <Link
        href="/bulk-orders-delhi"
        onClick={onLinkClick}
        className={`${baseClass} text-lg`}
      >
        Bulk Orders
      </Link>

      <Link
        href="/about"
        onClick={onLinkClick}
        className={`${baseClass} text-lg`}
      >
        About
      </Link>

      <Link
        href="/contact"
        onClick={onLinkClick}
        className={`${baseClass} text-lg`}
      >
        Contact
      </Link>
    </>
  );
}

function WhatsAppButton({
  full = false,
}: WhatsAppButtonProps): React.ReactElement {
  return (
    <a
      href="https://wa.me/7210397258?text=Hi%20RVMAqua,%20I%20need%20bulk%20branded%20water%20bottles%20in%20Delhi."
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-md bg-green-600 px-5 py-3 font-heading font-semibold text-white transition-colors hover:bg-green-700 ${
        full ? "w-full text-center text-lg" : "text-lg"
      }`}
    >
      WhatsApp Quote
    </a>
  );
}
