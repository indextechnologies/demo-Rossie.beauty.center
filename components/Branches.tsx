"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const branches = [
  {
    name: "Sucursal España",
    address: "Avda. España 2062 casi Brasilia,\nBarrio Obrero, Asunción, Paraguay.",
    schedule: "Lun – Sáb: 09:00 a 20:00 hs.",
    closed: "Domingos: Cerrado",
    phone: "+595 981 673 034",
    whatsapp: "https://wa.me/595981673034",
    maps: "https://www.google.com/maps/place/Rossie+Beauty+Center+–+Nails+Express+Sucursal+España/@-25.2879245,-57.5999547,17z/data=!3m1!4b1!4m6!3m5!1s0x945da7a4a67418bb:0x6c58dc749682de32!8m2!3d-25.2879245!4d-57.5999547!16s%2Fg%2F11ghlt9xrk!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Sucursal Julio Correa",
    address: "Avda. Julio Correa,\nAsunción, Paraguay.",
    schedule: "Lun – Sáb: 09:00 a 20:00 hs.",
    closed: "Domingos: Cerrado",
    phone: "+595 981 288 669",
    whatsapp: "https://wa.me/595981288669",
    maps: "https://www.google.com/maps/place/Nails+Express+–+Rossie+Beauty+Center/@-25.2710876,-57.5666179,17.5z/data=!4m6!3m5!1s0x945da61aa5488a9d:0x4d4317e0d33b07d0!8m2!3d-25.2710918!4d-57.5642887!16s%2Fg%2F11g6x8q3r8?hl=es-PY&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function Branches() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sucursales" className="pt-12 pb-24 bg-[#FEFCF9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#B8946A] text-xs tracking-[0.4em] uppercase mb-6"
        >
          — Dónde encontrarnos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] mb-10 md:mb-16 max-w-xl"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Nuestras <span className="italic text-[#C4A0A0]">sucursales</span>
        </motion.h2>

        {/* Full-width salon photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[220px] sm:h-[300px] md:h-[480px] mb-8 md:mb-12 overflow-hidden group"
        >
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=85"
            alt="Rossie Beauty Center salon"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5 md:p-8">
            <p
              className="text-white text-xl md:text-3xl font-light italic"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Tu bienestar, nuestra pasión.
            </p>
          </div>
        </motion.div>

        {/* Branches grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#E8DDD5]">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className="bg-[#FEFCF9] p-7 md:p-14"
            >
              {/* Branch name */}
              <p className="text-[#B8946A] text-xs tracking-[0.25em] uppercase mb-4">
                0{i + 1}
              </p>
              <h3
                className="text-3xl font-light text-[#1A1A1A] mb-8 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {branch.name}
              </h3>

              {/* Info rows */}
              <div className="space-y-5 mb-10">
                <div className="flex gap-4">
                  <svg className="w-4 h-4 mt-0.5 text-[#B8946A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed whitespace-pre-line font-light">
                    {branch.address}
                  </p>
                </div>

                <div className="flex gap-4">
                  <svg className="w-4 h-4 mt-0.5 text-[#B8946A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-[#6B6B6B] font-light">{branch.schedule}</p>
                    <p className="text-sm text-[#C4A0A0] font-light">{branch.closed}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <svg className="w-4 h-4 text-[#B8946A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm text-[#6B6B6B] font-light">{branch.phone}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={branch.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#B8946A] transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L0 24l6.335-1.511A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.81 9.81 0 01-5.012-1.371l-.36-.214-3.757.895.942-3.663-.234-.374A9.846 9.846 0 012.18 12c0-5.421 4.399-9.818 9.82-9.818 5.422 0 9.819 4.397 9.819 9.818 0 5.42-4.397 9.818-9.819 9.818z" />
                  </svg>
                  Reservar por WhatsApp
                </a>
                <a
                  href={branch.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-[#E8DDD5] text-[#6B6B6B] text-xs tracking-[0.2em] uppercase hover:border-[#B8946A] hover:text-[#B8946A] transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Abrir en Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
