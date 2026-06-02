"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cursos", href: "#cursos" },
  { label: "Reviews", href: "#reviews" },
  { label: "Sucursales", href: "#sucursales" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FEFCF9]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="relative w-[110px] h-[52px]">
            <Image
              src="/rossie-logo.png"
              alt="Rossie Beauty Center"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B] hover:text-[#B8946A] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#sucursales"
            className="text-xs tracking-[0.2em] uppercase px-6 py-2.5 border border-[#B8946A] text-[#B8946A] hover:bg-[#B8946A] hover:text-white transition-all duration-300"
          >
            Reservar Turno
          </a>
        </nav>

        {/* Mobile Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block h-px w-6 bg-[#1A1A1A] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-6 bg-[#1A1A1A] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-[#1A1A1A] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FEFCF9] border-t border-[#E8DDD5] overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-10">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B] hover:text-[#B8946A] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#sucursales"
                onClick={() => setOpen(false)}
                className="text-xs tracking-[0.2em] uppercase px-8 py-3 border border-[#B8946A] text-[#B8946A]"
              >
                Reservar Turno
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
