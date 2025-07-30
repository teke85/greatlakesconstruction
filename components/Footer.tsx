import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 font-jost text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">
                GreatLakes{" "}
                <span className="font-jost font-normal">Construction</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming homes with premium kitchen designs and expert
              craftsmanship since 2020.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-300" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-300" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kitchens"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Kitchen Styles
                </Link>
              </li>
              <li>
                <Link
                  href="/design"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Design Tool
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Kitchen Design</li>
              <li className="text-gray-300">Installation</li>
              <li className="text-gray-300">Renovation</li>
              <li className="text-gray-300">Consultation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+44 (7586) 832927</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">
                  sales@greatlakesconstruction.online
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">
                  833 Milford towers Thomas Lane, London, UK SE6 4SG
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 GreatLakes Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
