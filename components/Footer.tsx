"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 pb-14 border-b border-white/10">
          {/* Brand */}
          <div>
            <p
              className="text-3xl font-light mb-4 text-white"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Rossie<span className="italic text-[#B8946A]"> Beauty</span>
            </p>
            <p className="text-sm text-white/50 leading-loose font-light max-w-xs">
              Espacio premium dedicado al cuidado, sofisticación y bienestar en
              Asunción, Paraguay.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Navegación
            </p>
            <ul className="space-y-3">
              {["Nosotros", "Servicios", "Sucursales"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-[#B8946A] transition-colors duration-300 font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Contacto
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/595981673034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-[#B8946A] transition-colors duration-300 font-light"
                >
                  +595 981 673 034 (España)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/595981288669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-[#B8946A] transition-colors duration-300 font-light"
                >
                  +595 981 288 669 (Julio Correa)
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/595981673034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-[#B8946A] text-[#B8946A] text-xs tracking-[0.2em] uppercase hover:bg-[#B8946A] hover:text-white transition-all duration-300"
                >
                  Reservar Turno
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-light tracking-wide">
            © {year} Rossie Beauty Center. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20 font-light">
            Diseñado con cuidado por{" "}
            <span className="text-[#B8946A]/60">Index Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
