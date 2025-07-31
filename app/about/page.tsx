import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Craftsmanship Excellence",
    description:
      "Every project is executed with meticulous attention to detail and unwavering commitment to quality.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Client Partnership",
    description:
      "We believe in building lasting relationships through transparent communication and collaborative design.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation & Tradition",
    description:
      "We blend time-honored craftsmanship techniques with cutting-edge technology and materials.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Sustainable Practices",
    description:
      "Committed to environmentally responsible construction methods and sustainable material sourcing.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-stone-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1753967912/milano_ultra_in_pencil_grey_1760_idpil1.jpg"
            alt="Great Lakes Construction kitchen background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl font-playfair md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-stone-200 to-emerald-200 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl font-jost md:text-2xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
              For over two decades, Great Lakes Construction has been
              transforming London homes with exceptional craftsmanship,
              innovative design, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-playfair md:text-5xl font-bold text-slate-900 mb-6">
                Built on Excellence
              </h2>
              <p className="text-xl font-jost text-slate-600 leading-relaxed mb-6">
                Great Lakes Construction was born from a simple belief: every
                home deserves to be extraordinary. What started as a small team
                of passionate craftsmen has grown into London&#39;s premier
                luxury construction and renovation company.
              </p>
              <p className="text-lg font-jost text-slate-600 leading-relaxed mb-6">
                Our journey began in 2003 when our founder, James Mitchell,
                recognized the need for a construction company that truly
                understood the unique demands of luxury home renovation. With a
                background in fine carpentry and an eye for design, James
                assembled a team of master craftsmen who shared his vision.
              </p>
              <p className="text-lg font-jost text-slate-600 leading-relaxed">
                Today, we&#39;ve completed over 500 projects across London and
                the Home Counties, each one a testament to our commitment to
                quality, innovation, and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-jost font-bold text-emerald-600 mb-2">
                  500+
                </div>
                <div className="text-slate-700 font-jost font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-jost font-bold text-emerald-600 mb-2">
                  20+
                </div>
                <div className="text-slate-700 font-jost font-medium">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1753967912/shaker_super_slim_hd_kitchen_in_pebble_grey_hd_smoke_blue_2950_vfd72j.jpg"
                alt="Great Lakes Construction workshop"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-emerald-200 to-green-300 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-stone-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair md:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl font-jost text-stone-300 max-w-3xl mx-auto">
              The principles that guide everything we do, from initial
              consultation to final walkthrough
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 font-jost bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-jost font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-stone-300 font-jost leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair md:text-5xl font-bold text-slate-900 mb-6">
            Our Journey
          </h2>
          <p className="text-xl font-jost text-slate-600 max-w-3xl mx-auto">
            Key milestones that have shaped Great Lakes Construction into the
            company we are today
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-stone-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl font-jost text-stone-300 mb-8 leading-relaxed">
            Let&#39;s discuss how we can bring your vision to life with our
            expert craftsmanship and dedication to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex font-jost items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white text-lg font-bold rounded-xl hover:from-emerald-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Start Your Project
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
            <Link
              href="/kitchens"
              className="inline-flex font-jost items-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
