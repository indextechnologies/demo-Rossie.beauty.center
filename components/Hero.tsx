"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=85"
          alt="Rossie Beauty Center"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/20 via-transparent to-[#1A1A1A]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#D4B896] text-xs tracking-[0.4em] uppercase mb-6"
      >
          Asunción, Paraguay
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Rossie
          <br />
          <span className="italic text-[#D4B896]">Beauty</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/80 text-sm md:text-base tracking-[0.15em] font-light uppercase mb-12 max-w-md mx-auto"
        >
          El arte del cuidado personal elevado a su máxima expresión
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#sucursales"
            className="px-10 py-4 bg-[#B8946A] text-white text-xs tracking-[0.25em] uppercase hover:bg-[#A07F5A] transition-colors duration-300"
          >
            Reservar Turno
          </a>
          <a
            href="#servicios"
            className="px-10 py-4 border border-white/60 text-white text-xs tracking-[0.25em] uppercase hover:border-white transition-colors duration-300"
          >
            Ver Servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-white/40"
        />
      </motion.div>
    </section>
  );
}
