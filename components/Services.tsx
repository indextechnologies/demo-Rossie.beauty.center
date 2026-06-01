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
    <section id="servicios" className="py-32 md:py-40 bg-[#F0E6E6]/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
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
            className="text-5xl md:text-6xl font-light text-[#1A1A1A] max-w-xl"
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
          className="flex flex-wrap gap-2 mb-14"
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
              className="bg-[#FEFCF9] p-8 md:p-10 hover:bg-white transition-colors duration-300 group"
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
      </div>
    </section>
  );
}
