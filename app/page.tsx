import type { Metadata } from "next";
import HeroSection from "@/components/heroSection";

export const metadata: Metadata = {
  title: "Custom Branded Water Bottles in Delhi | RVMAqua",
  description:
    "RVMAqua provides custom branded and bulk packaged water bottles in Delhi for cafes, restaurants, offices, events and hotels. Fast delivery across Delhi NCR.",
};

export default function Page() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
