"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Paths", href: "/paths" },
  { name: "Topics", href: "/topics" },
  { name: "Stack", href: "/stack" },
  { name: "Projects", href: "/projects" },
  { name: "Courses", href: "/courses" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background text-foreground border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-muted-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Login */}
        <div className="hidden md:flex">
          <Link href="#" className="hover:text-muted-foreground transition-colors">
            Log in →
          </Link>
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
        <div className="md:hidden bg-secondary px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#"
            className="block py-2 border-t border-border pt-4 hover:text-muted-foreground transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </Link>
        </div>
      )}
    </header>
  );
}
