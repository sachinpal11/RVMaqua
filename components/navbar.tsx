"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Floating pill navbar */}
      <nav className="mx-auto xl:mt-4 flex xl:max-w-6xl items-center justify-between xl:rounded-full bg-blue-100/80 px-3 py-6 shadow-lg backdrop-blur-xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-base ml-8 font-heading font-bold text-blue-800"
        >
          RVMAqua
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <WhatsAppButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-blue-800"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Right Sidebar (Mobile) */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-blue-900 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <span className="font-heading font-bold text-white">RVMAqua</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-white"
          >
            <X size={24} />
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
  const baseClass = "font-body font-medium transition-colors";

  const color = mobile
    ? "text-white hover:text-white/80"
    : "text-gray-700 hover:text-blue-800";

  const size = mobile ? "text-base" : "text-sm";

  return (
    <>
      <Link
        href="/cafes-delhi"
        onClick={onLinkClick}
        className={`${baseClass} ${color} ${size}`}
      >
        Cafes
      </Link>
      <Link
        href="/bulk-orders-delhi"
        onClick={onLinkClick}
        className={`${baseClass} ${color} ${size}`}
      >
        Bulk Orders
      </Link>
      <Link
        href="/about"
        onClick={onLinkClick}
        className={`${baseClass} ${color} ${size}`}
      >
        About
      </Link>
      <Link
        href="/contact"
        onClick={onLinkClick}
        className={`${baseClass} ${color} ${size}`}
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
      className={`rounded-full bg-blue-800 px-5 py-4 text-sm font-heading font-semibold text-white transition hover:bg-blue-900 ${
        full ? "w-full text-center" : ""
      }`}
    >
      WhatsApp Quote
    </a>
  );
}
