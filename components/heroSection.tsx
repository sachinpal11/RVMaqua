import Image from "next/image";
import heroImage from "@/public/bottle.webp";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Custom branded water bottles in Delhi"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">
        {/* H1 (ONLY ONE ON PAGE) */}
        <h1 className="max-w-4xl font-heading text-3xl font-extrabold leading-tight text-white drop-shadow-[0_2px_2px_rgba(30,64,175,0.8)] md:text-5xl">
          Custom Branded Water Bottles for Businesses in Delhi
        </h1>

        {/* Supporting text */}
        <p className="mt-4 max-w-2xl font-body text-base text-neutral-100 md:text-lg">
          RVM Aqua supplies bulk packaged and logo-printed water bottles for
          cafes, restaurants, offices, hotels and events across Delhi NCR.
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/7210397258?text=Hi%20RVMAqua,%20I%20need%20bulk%20branded%20water%20bottles%20in%20Delhi."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-blue-800 px-6 py-3 font-heading text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Get Bulk Quote on WhatsApp
        </a>
      </div>
    </section>
  );
}
