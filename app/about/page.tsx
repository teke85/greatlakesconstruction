"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

type MenuCategory = "appetizers" | "mains" | "desserts" | "beverages";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  special: boolean;
};

const menuData: Record<MenuCategory, MenuItem[]> = {
  appetizers: [
    {
      id: 1,
      name: "Pan-Seared Scallops",
      description: "Fresh scallops with cauliflower purée and crispy pancetta",
      price: "K280",
      image: "/assets/menu/scallops.jpg",
      special: false,
    },
    {
      id: 2,
      name: "Zambian Beef Carpaccio",
      description: "Thinly sliced local beef with rocket, parmesan and lemon",
      price: "K220",
      image: "/assets/menu/carpaccio.jpg",
      special: true,
    },
    {
      id: 3,
      name: "Wild Mushroom Bruschetta",
      description: "Local mushrooms on artisan bread with herbs",
      price: "K180",
      image: "/assets/menu/bruschetta.jpg",
      special: false,
    },
    {
      id: 4,
      name: "Smoked Salmon Terrine",
      description: "House-smoked salmon with avocado and citrus",
      price: "K260",
      image: "/assets/menu/salmon.jpg",
      special: false,
    },
  ],
  mains: [
    {
      id: 5,
      name: "Grilled Zambezi Bream",
      description: "Fresh local fish with seasonal vegetables and herb butter",
      price: "K420",
      image: "/assets/menu/bream.jpg",
      special: true,
    },
    {
      id: 6,
      name: "Tender Beef Fillet",
      description: "Prime cut with roasted vegetables and red wine jus",
      price: "K520",
      image: "/assets/menu/beef-fillet.jpg",
      special: false,
    },
    {
      id: 7,
      name: "Chicken Supreme",
      description: "Free-range chicken breast with mushroom risotto",
      price: "K380",
      image: "/assets/menu/chicken.jpg",
      special: false,
    },
    {
      id: 8,
      name: "Vegetarian Wellington",
      description: "Seasonal vegetables wrapped in flaky pastry",
      price: "K320",
      image: "/assets/menu/wellington.jpg",
      special: false,
    },
    {
      id: 9,
      name: "Lamb Rack",
      description: "Herb-crusted lamb with rosemary jus and roasted potatoes",
      price: "K480",
      image: "/assets/menu/lamb.jpg",
      special: true,
    },
  ],
  desserts: [
    {
      id: 10,
      name: "Chocolate Fondant",
      description: "Warm chocolate cake with vanilla ice cream",
      price: "K180",
      image: "/assets/menu/fondant.jpg",
      special: false,
    },
    {
      id: 11,
      name: "Baobab Cheesecake",
      description: "Local baobab fruit cheesecake with honey drizzle",
      price: "K160",
      image: "/assets/menu/cheesecake.jpg",
      special: true,
    },
    {
      id: 12,
      name: "Crème Brûlée",
      description: "Classic vanilla custard with caramelized sugar",
      price: "K170",
      image: "/assets/menu/brulee.jpg",
      special: false,
    },
    {
      id: 13,
      name: "Seasonal Fruit Tart",
      description: "Fresh tropical fruits on pastry cream",
      price: "K150",
      image: "/assets/menu/fruit-tart.jpg",
      special: false,
    },
  ],
  beverages: [
    {
      id: 14,
      name: "Local Coffee Blend",
      description: "Freshly roasted Zambian coffee beans",
      price: "K45",
      image: "/assets/menu/coffee.jpg",
      special: false,
    },
    {
      id: 15,
      name: "Premium Wine Selection",
      description: "Curated selection of local and international wines",
      price: "K120-K400",
      image: "/assets/menu/wine.jpg",
      special: true,
    },
    {
      id: 16,
      name: "Fresh Fruit Juices",
      description: "Locally sourced seasonal fruit juices",
      price: "K65",
      image: "/assets/menu/juice.jpg",
      special: false,
    },
    {
      id: 17,
      name: "Craft Cocktails",
      description: "Signature cocktails with premium spirits",
      price: "K180-K250",
      image: "/assets/menu/cocktails.jpg",
      special: true,
    },
  ],
};

export default function ElegantMenu() {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("appetizers");
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const menuItemsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial animation for menu container
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    // Animate items when category changes
    if (!isTransitioning && menuItemsContainerRef.current) {
      const items = menuItemsContainerRef.current.children;

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [activeCategory, isTransitioning]);

  const handleCategoryChange = (category: MenuCategory) => {
    if (category !== activeCategory && !isTransitioning) {
      setIsTransitioning(true);

      // Hide hovered item during transition
      setHoveredItem(null);

      // Animate out current items
      if (menuItemsContainerRef.current) {
        const currentItems = menuItemsContainerRef.current.children;

        gsap.to(currentItems, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.in",
          onComplete: () => {
            setActiveCategory(category);
            setIsTransitioning(false);
          },
        });
      } else {
        // Fallback if ref is not available
        setActiveCategory(category);
        setIsTransitioning(false);
      }

      // Animate category tab
      const categoryEl = categoryRefs.current[category];
      if (categoryEl) {
        gsap.fromTo(
          categoryEl,
          { scale: 1 },
          { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 }
        );
      }
    }
  };

  const handleMouseEnter = (
    item: MenuItem,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (isTransitioning) return;

    setHoveredItem(item);
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Adjust position to prevent image from going off-screen
    let xPosition = rect.right + 20;
    if (xPosition + 250 > viewportWidth) {
      xPosition = rect.left - 270; // Show on left side if no space on right
    }

    setImagePosition({
      x: Math.max(20, xPosition), // Ensure minimum 20px from edge
      y: Math.max(20, rect.top + rect.height / 2 - 100),
    });

    // Animate image entrance
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, x: -20 },
        { opacity: 1, scale: 1, x: 0, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  };

  const handleMouseLeave = () => {
    if (isTransitioning) return;

    // Animate image exit
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        x: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setHoveredItem(null),
      });
    } else {
      setHoveredItem(null);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (hoveredItem && !isTransitioning) {
      const rect = event.currentTarget.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      let xPosition = rect.right + 20;
      if (xPosition + 250 > viewportWidth) {
        xPosition = rect.left - 270;
      }

      setImagePosition({
        x: Math.max(20, xPosition),
        y: Math.max(20, rect.top + rect.height / 2 - 100),
      });
    }
  };

  const categories = [
    { key: "appetizers" as MenuCategory, label: "Appetizers", icon: "🥗" },
    { key: "mains" as MenuCategory, label: "Main Courses", icon: "🍽️" },
    { key: "desserts" as MenuCategory, label: "Desserts", icon: "🍰" },
    { key: "beverages" as MenuCategory, label: "Beverages", icon: "🍷" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-green-50 py-16 px-4">
      <div ref={menuRef} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-4">
            Our Menu
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Experience culinary excellence with our carefully crafted dishes,
            featuring the finest local ingredients and international techniques.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              ref={(el) => {
                categoryRefs.current[category.key] = el;
              }}
              onClick={() => handleCategoryChange(category.key)}
              disabled={isTransitioning}
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed ${
                activeCategory === category.key
                  ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-stone-700 hover:bg-stone-100 shadow-md hover:shadow-lg"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-serif text-stone-800 mb-8 text-center capitalize">
              {categories.find((cat) => cat.key === activeCategory)?.label}
            </h2>

            <div ref={menuItemsContainerRef} className="grid gap-6">
              {menuData[activeCategory].map((item) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  className="group cursor-pointer p-6 rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-500 border border-transparent hover:border-green-200"
                  onMouseEnter={(e) => handleMouseEnter(item, e)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-serif text-stone-800 group-hover:text-green-700 transition-colors duration-300">
                          {item.name}
                        </h3>
                        {item.special && (
                          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Chef&apos;s Special
                          </span>
                        )}
                      </div>
                      <p className="text-stone-600 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                    <div className="ml-6">
                      <span className="text-2xl font-bold text-green-600">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                    <p className="text-center text-sm text-green-600 mt-2">
                      Hover to preview
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Image Preview */}
        {hoveredItem && (
          <div
            ref={imageRef}
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${imagePosition.x}px`,
              top: `${imagePosition.y}px`,
            }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-green-200">
              <div className="relative w-48 h-36 rounded-xl overflow-hidden">
                <Image
                  src={hoveredItem.image}
                  alt={hoveredItem.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 200px) 100vw, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="mt-3">
                <h4 className="font-serif text-stone-800 text-lg">
                  {hoveredItem.name}
                </h4>
                <p className="text-amber-600 font-bold">{hoveredItem.price}</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-stone-600 mb-4">
              All dishes are prepared fresh to order using locally sourced
              ingredients where possible.
            </p>
            <p className="text-stone-500 text-sm">
              Prices are subject to change. Please inform our staff of any
              dietary requirements or allergies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
