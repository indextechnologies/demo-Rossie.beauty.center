"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const highlights = [
  { label: "Nail Art Avanzado", desc: "Técnicas internacionales de esculpido, diseño geométrico y texturizado 3D." },
  { label: "Colorimetría Capilar", desc: "Fundamentos y práctica de balayage, coloración y tratamientos de pigmento." },
  { label: "Estética Facial", desc: "Protocolos de skincare profesional y maquillaje artístico para eventos." },
  { label: "Masterclass Spa", desc: "Técnicas de masaje, podología y rituales de bienestar corporal completo." },
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cursos" className="py-32 md:py-40 bg-[#1A1A1A] text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#B8946A] text-xs tracking-[0.4em] uppercase mb-6"
            >
              — Formación & Cursos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-6xl font-light leading-[1.1] mb-8 text-white"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Maestría que se{" "}
              <span className="italic text-[#C4A0A0]">comparte</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-white/60 text-sm leading-loose font-light mb-10"
            >
              En Rossie Beauty Center la excelencia no es solo un estándar de
              servicio — es una filosofía de formación continua. Nuestro equipo
              se capacita permanentemente con las últimas técnicas internacionales,
              y ahora abrimos ese conocimiento a quienes desean crecer en el mundo
              de la belleza profesional.
            </motion.p>

            {/* Highlights list */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="space-y-5 mb-12"
            >
              {highlights.map((h, i) => (
                <li key={i} className="flex gap-4 items-start border-b border-white/10 pb-5">
                  <span className="text-[#B8946A] text-xs mt-0.5 tracking-widest font-medium flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-white text-sm font-medium mb-1 tracking-wide">{h.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed font-light">{h.desc}</p>
                  </div>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://wa.me/595981673034?text=Hola!%20Me%20interesa%20información%20sobre%20los%20cursos%20de%20Rossie%20Beauty%20Center."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-[#B8946A] text-[#B8946A] text-xs tracking-[0.2em] uppercase hover:bg-[#B8946A] hover:text-white transition-all duration-300"
              >
                Consultar disponibilidad
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[460px] md:h-[580px] overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&q=85"
              alt="Cursos y formación Rossie Beauty Center"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
