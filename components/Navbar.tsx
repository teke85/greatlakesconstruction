"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 font-[family-name:var(--font-jost)] flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive("/")
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/kitchens"
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive("/kitchens")
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Kitchens
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive("/about")
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive("/contact")
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/quote"
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  isActive("/quote")
                    ? "bg-green-800 text-white"
                    : "bg-green-700 text-white hover:bg-green-600"
                }`}
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
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
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive("/")
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/kitchens"
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive("/kitchens")
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Kitchens
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive("/about")
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive("/contact")
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/quote"
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive("/quote")
                    ? "bg-green-800 text-white"
                    : "bg-green-700 text-white hover:bg-green-600"
                }`}
                onClick={() => setIsOpen(false)}
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
