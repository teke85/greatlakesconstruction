import Image from "next/image";
import Link from "next/link";

const kitchens = [
  {
    id: 1,
    name: "The Windsor Classic",
    price: "£2,850",
    description:
      "Timeless elegance meets modern functionality. Features premium oak cabinetry with soft-close drawers, marble countertops, and brushed gold fixtures.",
    features: [
      "Premium Oak Cabinetry",
      "Carrara Marble Countertops",
      "Brushed Gold Hardware",
      "Soft-Close Drawer System",
      "Under-Cabinet LED Lighting",
    ],
    image: "/kitchens/windsor-classic.jpg",
  },
  {
    id: 2,
    name: "The Hampton Luxe",
    price: "£2,650",
    description:
      "Contemporary luxury with clean lines and sophisticated materials. Combines sleek quartz surfaces with premium walnut finishes.",
    features: [
      "Walnut Wood Grain Finish",
      "Engineered Quartz Counters",
      "Integrated Appliance Design",
      "Chrome Professional Handles",
      "Smart Storage Solutions",
    ],
    image: "/kitchens/hampton-luxe.jpg",
  },
  {
    id: 3,
    name: "The Mayfair Elite",
    price: "£2,950",
    description:
      "The pinnacle of kitchen luxury. Hand-crafted details, premium materials, and bespoke finishes create an unparalleled culinary experience.",
    features: [
      "Hand-Crafted Cherry Wood",
      "Granite Composite Surfaces",
      "Antique Brass Accents",
      "Custom Crown Molding",
      "Wine Storage Integration",
    ],
    image: "/kitchens/mayfair-elite.jpg",
  },
  {
    id: 4,
    name: "The Chelsea Modern",
    price: "£2,200",
    description:
      "Minimalist design with maximum impact. Clean geometries and premium finishes create a sophisticated modern aesthetic.",
    features: [
      "High-Gloss Lacquer Finish",
      "Calacatta Quartz Surfaces",
      "Handleless Design",
      "Integrated LED Strip Lighting",
      "Concealed Storage Systems",
    ],
    image: "/kitchens/chelsea-modern.jpg",
  },
  {
    id: 5,
    name: "The Kensington Heritage",
    price: "£2,750",
    description:
      "Traditional craftsmanship with contemporary conveniences. Rich mahogany tones and classic detailing for the discerning homeowner.",
    features: [
      "Solid Mahogany Construction",
      "Natural Stone Countertops",
      "Traditional Brass Hardware",
      "Raised Panel Doors",
      "Custom Spice Rack System",
    ],
    image: "/kitchens/kensington-heritage.jpg",
  },
  {
    id: 6,
    name: "The Belgravia Contemporary",
    price: "£1,850",
    description:
      "Affordable luxury without compromise. Smart design solutions and quality materials create exceptional value.",
    features: [
      "Engineered Wood Veneer",
      "Composite Stone Surfaces",
      "Stainless Steel Accents",
      "Soft-Touch Mechanisms",
      "Modular Design System",
    ],
    image: "/kitchens/belgravia-contemporary.jpg",
  },
];

export default function KitchensPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-stone-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent">
              Luxury Kitchen Collections
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
              Transform your culinary space with our bespoke kitchen designs.
              Each collection represents the pinnacle of craftsmanship and
              luxury.
            </p>
          </div>
        </div>
      </div>

      {/* Kitchen Collections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {kitchens.map((kitchen, index) => (
            <div
              key={kitchen.id}
              className={`group ${index % 2 === 0 ? "lg:mt-0" : "lg:mt-16"}`}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={kitchen.image}
                    alt={kitchen.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {kitchen.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {kitchen.name}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {kitchen.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-slate-800 mb-4">
                      Premium Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {kitchen.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-slate-700"
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Request Quote
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Great Lakes Construction?
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Over two decades of excellence in luxury kitchen design and
              construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bespoke Design",
                description:
                  "Every kitchen is uniquely crafted to your vision and lifestyle requirements.",
                icon: "🎨",
              },
              {
                title: "Premium Materials",
                description:
                  "We source only the finest materials and components for lasting beauty and performance.",
                icon: "💎",
              },
              {
                title: "Expert Installation",
                description:
                  "Our certified craftsmen ensure flawless installation with attention to every detail.",
                icon: "🔧",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Create Your Dream Kitchen?
          </h2>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Let our expert designers bring your vision to life with a
            complimentary consultation and detailed quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-lg font-bold rounded-xl hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your Project Today
            <svg
              className="ml-3 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
