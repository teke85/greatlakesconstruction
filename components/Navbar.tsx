"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold flex flex-col font-jost text-xl bg-green-700 p-6 text-white">
                GreatLakes
                <span className="font-cormorant italic">Construction</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 font-[family-name:var(--font-jost)] flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium"
              >
                Home
              </Link>
              <Link
                href="/kitchens"
                className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium"
              >
                Kitchens
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium"
              >
                Contact
              </Link>
              <Link
                href="/quote"
                className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 font-medium"
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Home
              </Link>
              <Link
                href="/kitchens"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Kitchens
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Contact
              </Link>
              <Link
                href="/quote"
                className="block bg-green-700 text-white px-3 py-2 rounded-md"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
