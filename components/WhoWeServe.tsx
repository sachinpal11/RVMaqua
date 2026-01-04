import {
  Coffee,
  UtensilsCrossed,
  Hotel,
  Building2,
  CalendarDays,
  Dumbbell,
} from "lucide-react";

export default function WhoWeServe() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-gray-900 md:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-3 font-body text-gray-600">
            Custom branded water bottle solutions for businesses across Delhi
            NCR.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Coffee />}
            title="Cafes"
            description="Logo-printed water bottles that enhance cafe branding and customer trust."
            image="/serve/cafe.webp"
          />

          <ServiceCard
            icon={<UtensilsCrossed />}
            title="Restaurants"
            description="Hygienic branded bottled water to elevate the dining experience."
            image="/serve/restaurant.webp"
          />

          <ServiceCard
            icon={<Hotel />}
            title="Hotels"
            description="Premium bottled water solutions for hotels and hospitality brands."
            image="/serve/hotel.webp"
          />

          <ServiceCard
            icon={<Building2 />}
            title="Corporate Offices"
            description="Bulk bottled water supply for offices, meetings, and branding."
            image="/serve/corporate.webp"
          />

          <ServiceCard
            icon={<CalendarDays />}
            title="Events & Weddings"
            description="Custom bottled water for events, exhibitions, and large gatherings."
            image="/serve/events.webp"
          />

          <ServiceCard
            icon={<Dumbbell />}
            title="Gyms & Fitness Centers"
            description="Branded hydration solutions for gyms and wellness spaces."
            image="/serve/gym.webp"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Card Component ---------- */

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

function ServiceCard({ icon, title, description, image }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-blue-800 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Hover Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-0 bg-blue-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-800 transition group-hover:bg-white group-hover:text-blue-800">
          {icon}
        </div>

        <h3 className="font-heading text-lg font-semibold text-gray-900 transition group-hover:text-white">
          {title}
        </h3>

        <p className="mt-2 font-body text-sm text-gray-600 transition group-hover:text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
}
