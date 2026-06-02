"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = [
  {
    id: "unas",
    label: "Uñas",
    services: [
      { name: "Uñas Esculpidas (Acrílico / Gel)", desc: "Construcción completa con acabado impecable y larga duración.", price: "Gs. 120.000" },
      { name: "Semipermanente", desc: "Esmalte de larga duración con brillo intenso y secado al instante.", price: "Gs. 80.000" },
      { name: "Nail Art Personalizado", desc: "Diseños a medida, desde minimalistas hasta editorial.", price: "Gs. 50.000 (adicional)" },
      { name: "Cuidado de Manos", desc: "Limado, cutículas, hidratación profunda y esmaltado clásico.", price: "Gs. 40.000" },
    ],
  },
  {
    id: "pelo",
    label: "Pelo",
    services: [
      { name: "Lavado + Secado Profesional", desc: "Higiene capilar con productos premium y finalización perfecta.", price: "Gs. 45.000" },
      { name: "Nutrición Profunda", desc: "Keratina, máscara reconstructora o tratamiento de brillo intensivo.", price: "Gs. 120.000" },
      { name: "Corte Profesional", desc: "Corte personalizado según tu estructura facial y estilo de vida.", price: "Gs. 80.000" },
      { name: "Coloración / Balayage", desc: "Coloración delicada, mechas, balayage o fantasía. Pigmentos premium.", price: "Gs. 250.000" },
    ],
  },
  {
    id: "skincare",
    label: "Skincare",
    services: [
      { name: "Limpieza Facial Profunda", desc: "Extracción, vapozone y tratamiento purificante para piel radiante.", price: "Gs. 120.000" },
      { name: "Hidratación Intensiva", desc: "Sérum, mascarilla y crema activa para piel nutrida y firme.", price: "Gs. 100.000" },
      { name: "Tratamiento Luminosidad", desc: "Vitamina C, ácidos suaves y finalizador iluminador de alta gama.", price: "Gs. 140.000" },
    ],
  },
  {
    id: "makeup",
    label: "Make-up",
    services: [
      { name: "Maquillaje Social Premium", desc: "Look natural a sofisticado, adaptado a tu tono de piel y evento.", price: "Gs. 130.000" },
      { name: "Estilismo para Eventos", desc: "Producción completa para bodas, quince años, galas y sesiones de fotos.", price: "Gs. 200.000" },
    ],
  },
  {
    id: "podologia",
    label: "Podología",
    services: [
      { name: "Tratamiento Podológico Integral", desc: "Callicida, limas especiales, cuidado ungueal y finalización terapéutica.", price: "Gs. 90.000" },
      { name: "Spa de Pies Especializado", desc: "Baño termal, exfoliación, masaje y esmaltado de larga duración.", price: "Gs. 120.000" },
    ],
  },
  {
    id: "masaje",
    label: "Masaje",
    services: [
      { name: "Masaje Relajante (60 min)", desc: "Técnica sueca con aceites esenciales para liberar tensión y estrés.", price: "Gs. 120.000" },
      { name: "Masaje Descontracturante (60 min)", desc: "Trabajo profundo en zona lumbar, cervical y hombros contracturados.", price: "Gs. 150.000" },
      { name: "Spa Corporal Completo", desc: "Exfoliación + envoltura + masaje completo. Experiencia de bienestar total.", price: "Gs. 250.000" },
    ],
  },
];

function gridClass(count: number): string {
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  if (count === 4) return "grid-cols-1 sm:grid-cols-2";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("unas");

  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="servicios" className="py-16 md:py-32 lg:py-40 bg-[#F0E6E6]/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#B8946A] text-xs tracking-[0.4em] uppercase mb-6"
          >
            — Nuestros servicios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] max-w-xl"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Nuestros <span className="italic text-[#C4A0A0]">Servicios</span>
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8 md:mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                active === cat.id
                  ? "bg-[#1A1A1A] text-white"
                  : "border border-[#E8DDD5] text-[#6B6B6B] hover:border-[#B8946A] hover:text-[#B8946A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid — dynamic columns based on item count */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`grid gap-px bg-[#E8DDD5] ${gridClass(current.services.length)}`}
        >
          {current.services.map((svc, i) => (
            <div
              key={i}
              className="bg-[#FEFCF9] p-6 md:p-10 hover:bg-white transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-[#B8946A] tracking-[0.2em] font-medium">
                  0{i + 1}
                </span>
                <span
                  className="text-base text-[#B8946A] font-light text-right"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {svc.price}
                </span>
              </div>
              <h3
                className="text-xl font-light text-[#1A1A1A] mb-3 leading-snug"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {svc.name}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed font-light">
                {svc.desc}
              </p>
              <div className="mt-6 h-px bg-[#E8DDD5] group-hover:bg-[#B8946A]/40 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-xs text-[#6B6B6B] tracking-wide"
        >
          * Precios referenciales. Consultar variaciones según diseño o extensión del servicio.
        </motion.p>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://www.instagram.com/rossie_beauty_center"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#E8DDD5] text-[#6B6B6B] text-xs tracking-[0.2em] uppercase hover:border-[#B8946A] hover:text-[#B8946A] transition-all duration-300"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Descubrí más en{" "}
            <span className="font-medium group-hover:text-[#B8946A]">@rossie_beauty_center</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
