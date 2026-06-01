"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = [
  {
    id: "nails",
    label: "Manicura & Nails Express",
    services: [
      {
        name: "Uñas Esculpidas (Acrílico / Gel)",
        desc: "Construcción completa con acabado impecable y larga duración.",
        price: "Gs. 120.000",
      },
      {
        name: "Semipermanente",
        desc: "Esmalte de larga duración con brillo intenso y secado al instante.",
        price: "Gs. 80.000",
      },
      {
        name: "Nail Art Personalizado",
        desc: "Diseños a medida, desde minimalistas hasta editorial.",
        price: "Gs. 50.000 (adicional)",
      },
      {
        name: "Cuidado de Manos",
        desc: "Limado, cutículas, hidratación profunda y esmaltado clásico.",
        price: "Gs. 40.000",
      },
    ],
  },
  {
    id: "pedicure",
    label: "Pedicura Premium",
    services: [
      {
        name: "Pedicura Spa Completa",
        desc: "Baño de pies, exfoliación, masaje y esmaltado. Puro relax.",
        price: "Gs. 90.000",
      },
      {
        name: "Exfoliación + Hidratación Intensiva",
        desc: "Tratamiento para pies con textura suave y renovada.",
        price: "Gs. 70.000",
      },
      {
        name: "Esmaltado de Larga Duración",
        desc: "Semipermanente para pies con resistencia superior.",
        price: "Gs. 60.000",
      },
    ],
  },
  {
    id: "estetica",
    label: "Estética Integral",
    services: [
      {
        name: "Diseño y Laminado de Cejas",
        desc: "Definición perfecta que enmarca tu mirada de forma natural.",
        price: "Gs. 70.000",
      },
      {
        name: "Lifting de Pestañas",
        desc: "Curvado y volumen sin extensiones. Efecto duradera y natural.",
        price: "Gs. 120.000",
      },
      {
        name: "Tratamiento Facial Hidratante",
        desc: "Limpieza profunda, hidratación y luminosidad para tu piel.",
        price: "Gs. 150.000",
      },
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("nails");

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
            Menú de <span className="italic text-[#C4A0A0]">servicios</span>
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                active === cat.id
                  ? "bg-[#1A1A1A] text-white"
                  : "border border-[#E8DDD5] text-[#6B6B6B] hover:border-[#B8946A] hover:text-[#B8946A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8DDD5]"
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
                  className="text-base text-[#B8946A] font-light"
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

        {/* Note */}
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
