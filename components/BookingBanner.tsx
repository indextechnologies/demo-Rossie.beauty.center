"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const branches = [
  {
    name: "Sucursal España",
    address: "Avda. España 2062 casi Brasilia",
    phone: "+595 981 673 034",
    whatsapp: "https://wa.me/595981673034?text=Hola!%20Quiero%20reservar%20un%20turno%20en%20la%20sucursal%20España.",
  },
  {
    name: "Sucursal Julio Correa",
    address: "Avda. Julio Correa, Asunción",
    phone: "+595 981 288 669",
    whatsapp: "https://wa.me/595981288669?text=Hola!%20Quiero%20reservar%20un%20turno%20en%20la%20sucursal%20Julio%20Correa.",
  },
];

export default function BookingBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reservas" className="py-24 md:py-32 bg-[#F0E6E6]/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#B8946A] text-xs tracking-[0.4em] uppercase mb-6"
        >
          — Agenda tu visita
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl md:text-6xl font-light text-[#1A1A1A] mb-5"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Reserva tu <span className="italic text-[#C4A0A0]">turno</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[#6B6B6B] text-sm font-light max-w-md mx-auto mb-14"
        >
          Elegí tu sucursal más cercana y escribinos por WhatsApp. Te respondemos en minutos.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {branches.map((branch, i) => (
            <motion.a
              key={branch.name}
              href={branch.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.12 }}
              className="group flex flex-col items-center gap-4 p-8 bg-[#FEFCF9] border border-[#E8DDD5] hover:border-[#B8946A] hover:bg-white transition-all duration-300"
            >
              {/* WhatsApp icon */}
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors duration-300">
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L0 24l6.335-1.511A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.81 9.81 0 01-5.012-1.371l-.36-.214-3.757.895.942-3.663-.234-.374A9.846 9.846 0 012.18 12c0-5.421 4.399-9.818 9.82-9.818 5.422 0 9.819 4.397 9.819 9.818 0 5.42-4.397 9.818-9.819 9.818z" />
                </svg>
              </div>

              <div className="text-center">
                <p
                  className="text-lg font-light text-[#1A1A1A] mb-1"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {branch.name}
                </p>
                <p className="text-xs text-[#6B6B6B] font-light mb-3">{branch.address}</p>
                <p className="text-sm text-[#B8946A] font-light tracking-wide">{branch.phone}</p>
              </div>

              <span className="text-xs tracking-[0.2em] uppercase text-[#B8946A] group-hover:underline underline-offset-4 transition-all">
                Reservar ahora →
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 text-xs text-[#6B6B6B] tracking-wide"
        >
          Atención: Lunes a Sábados de 09:00 a 20:00 hs. · Domingos cerrado.
        </motion.p>
      </div>
    </section>
  );
}
