"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, Wrench, Star, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const tl = gsap.timeline();

      // Initial hero animations (on load)
      tl.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      )
        .fromTo(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .fromTo(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .fromTo(
          imageRef.current,
          {
            x: 100,
            opacity: 0,
            rotation: 10,
          },
          {
            x: 0,
            opacity: 1,
            rotation: 3,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1"
        );

      // Features section scroll animation
      gsap.fromTo(
        featuresRef.current?.querySelectorAll(".feature-card") || [],
        {
          y: 80,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Features section heading animation
      const featuresHeading =
        featuresRef.current?.querySelector(".features-heading");
      if (featuresHeading) {
        gsap.fromTo(
          featuresHeading,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Showcase section animations
      gsap.fromTo(
        showcaseRef.current?.querySelectorAll(".showcase-card") || [],
        {
          y: 100,
          opacity: 0,
          rotationY: 15,
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Showcase heading animation
      const showcaseHeading =
        showcaseRef.current?.querySelector(".showcase-heading");
      if (showcaseHeading) {
        gsap.fromTo(
          showcaseHeading,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // CTA section animation
      const ctaContent = ctaRef.current?.querySelector(".cta-content");
      if (ctaContent) {
        gsap.fromTo(
          ctaContent,
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Parallax effect for hero background
      const heroBg = heroRef.current?.querySelector(".hero-bg");
      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="pt-20 w-full h-full relative">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 hero-bg">
          <Image
            src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1753597796/shaker_timber_in_moon_white_2176_oghgxk.jpg"
            alt="Beautiful kitchen background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1
                ref={titleRef}
                className="luxury-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              >
                Design Your
                <span className="block text-gradient-luxury font-cormorant italic">
                  Dream Kitchen
                </span>
              </h1>
              <p
                ref={subtitleRef}
                className="font-playfair text-xl md:text-2xl mb-8 text-gray-100 font-light tracking-wide-luxury leading-relaxed"
              >
                Transform your space with premium kitchen designs crafted by
                experts. From concept to completion, we create culinary
                sanctuaries that reflect your lifestyle.
              </p>
              <div
                ref={buttonsRef}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              >
                <Link
                  href="/design"
                  className="luxury-button font-jost bg-green-700 text-white px-10 py-4 rounded-lg hover:bg-green-800 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  Start Designing <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
                <Link
                  href="/quote"
                  className="luxury-button font-jost border-2 border-green-700 bg-white/20 px-10 py-4 rounded-lg hover:bg-green-700 text-white transition-all duration-300 backdrop-blur-sm"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            {/* Right Image */}
            <div ref={imageRef} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1753596414/j_pull_kitchen_in_white_gloss_1702_mpx1oa.jpg"
                  alt="Luxury modern kitchen with premium finishes and elegant design"
                  width={600}
                  height={700}
                  className="object-cover"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg floating-element">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="font-montserrat font-semibold text-gray-900 text-sm">
                      Premium Design
                    </span>
                  </div>
                </div>
                {/* Floating Stats */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg floating-element">
                  <div className="text-center">
                    <div className="font-playfair font-bold text-2xl text-gray-900">
                      500+
                    </div>
                    <div className="font-montserrat text-sm text-gray-600 uppercase tracking-wide">
                      Projects
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl floating-element"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-xl floating-element"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 features-heading">
            <h2 className="luxury-heading font-jost text-3xl md:text-5xl text-gray-900 mb-6">
              Why Choose
              <span className="font-cormorant italic text-green-700">
                {" "}
                Greatlakes
              </span>
            </h2>
            <p className="elegant-subheading font-jost text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovative design with exceptional craftsmanship to
              create kitchens that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center group feature-card">
              <div className="bg-gradient-to-br from-blue-100 to-white-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3 text-gray-900">
                Premium Quality
              </h3>
              <p className="premium-text font-jost text-gray-700">
                Only the finest materials and craftsmanship in every detail
              </p>
            </div>
            <div className="text-center group feature-card">
              <div className="bg-gradient-to-br from-blue-100 to-white-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3 text-gray-900">
                Expert Team
              </h3>
              <p className="premium-text font-jost text-gray-700">
                Skilled designers and master craftsmen at your service
              </p>
            </div>
            <div className="text-center group feature-card">
              <div className="bg-gradient-to-br from-blue-100 to-white-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Wrench className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3 text-gray-900">
                Full Service
              </h3>
              <p className="premium-text font-jost text-gray-700">
                Complete design, supply, and installation solutions
              </p>
            </div>
            <div className="text-center group feature-card">
              <div className="bg-gradient-to-br from-blue-100 to-white-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3 text-gray-900">
                5-Star Service
              </h3>
              <p className="premium-text font-jost text-gray-700">
                Rated #1 by our discerning clientele
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Showcase */}
      <section ref={showcaseRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 showcase-heading">
            <h2 className="luxury-heading font-jost text-3xl md:text-5xl text-gray-900 mb-6">
              Featured
              <span className="font-cormorant italic text-green-700">
                {" "}
                Kitchen Designs
              </span>
            </h2>
            <p className="elegant-subheading font-jost text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most coveted kitchen styles and discover your
              inspiration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 showcase-card">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1753601441/j_pull_kitchen_in_cashmere_1811_gb8a0o.jpg"
                  alt="Contemporary Modern Kitchen Design"
                  width={400}
                  height={320}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="font-cormorant text-2xl text-white font-medium tracking-wide-luxury">
                    Modern Kitchen
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-gray-900">
                  Contemporary Modern
                </h3>
                <p className="premium-text mb-6 font-jost text-gray-700">
                  Sleek lines and minimalist design for the discerning modern
                  home
                </p>
                <Link
                  href="/kitchens"
                  className="luxury-button font-jost text-green-600 font-semibold hover:text-green-800 inline-flex items-center group"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 showcase-card">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1753601442/shaker_timber_in_moon_white_2176_fre2wj.jpg"
                  alt="Classic Traditional Kitchen Design"
                  width={400}
                  height={320}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="font-cormorant text-2xl text-white font-medium tracking-wide-luxury">
                    Classic Kitchen
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-gray-900">
                  Classic Traditional
                </h3>
                <p className="premium-text mb-6 font-jost text-gray-700">
                  Timeless elegance with traditional craftsmanship and heritage
                  details
                </p>
                <Link
                  href="/kitchens"
                  className="luxury-button font-jost text-green-600 font-semibold hover:text-green-800 inline-flex items-center group"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 showcase-card">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1753601441/linea_in_navy_blue_silk_2404_assny4.jpg"
                  alt="Rustic Farmhouse Kitchen Design"
                  width={400}
                  height={320}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="font-cormorant text-2xl text-white font-medium tracking-wide-luxury">
                    Rustic Kitchen
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-gray-900">
                  Rustic Farmhouse
                </h3>
                <p className="premium-text mb-6 font-jost text-gray-700">
                  Warm, inviting spaces with natural materials and artisanal
                  touches
                </p>
                <Link
                  href="/kitchens"
                  className="luxury-button font-jost text-green-600 font-semibold hover:text-green-800 inline-flex items-center group"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="bg-gradient-to-r from-gray-400 to-white-800 text-white py-20 relative overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1753883370/shaker_chelsea_ermine_kitchen_in_olive_green_pillow_1844_mtfdst.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="cta-content">
            <h2 className="font-jost text-3xl md:text-5xl font-bold mb-6 luxury-heading text-white">
              Ready to Start Your
              <span className="font-cormorant italic text-green-700 block">
                Kitchen Journey?
              </span>
            </h2>
            <p className="font-jost text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 font-semibold tracking-wide-luxury">
              Book a complimentary consultation and let our experts help you
              create the kitchen of your dreams.
            </p>
            <Link
              href="/contact"
              className="luxury-button font-jost bg-green-700 text-white px-10 py-4 rounded-lg hover:bg-green-800 transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Book Free Consultation <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
