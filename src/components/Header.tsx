"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Paths", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Tutorials", href: "#" },
  { name: "Projects", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-slate-300 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Login */}
        <div className="hidden md:flex">
          <a href="#" className="hover:text-slate-300 transition-colors">
            Log in →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 hover:text-slate-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="block py-2 border-t border-slate-700 pt-4 hover:text-slate-300 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </a>
        </div>
      )}
    </header>
  );
}
