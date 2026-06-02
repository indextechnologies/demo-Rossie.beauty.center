"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ─── Types ─── */
type Variant = { label: string; price: string };
type ServiceItem = {
  name: string;
  desc?: string;
  price?: string;
  originalPrice?: string;
  badge?: string;
  variants?: Variant[];
  isPackage?: boolean;
  featured?: boolean;
  fullWidth?: boolean;
};
type Section = { label: string; items: ServiceItem[] };
type Category = {
  id: string;
  label: string;
  availabilityNote?: string;
  sections: Section[];
};

/* ─── Data ─── */
const categories: Category[] = [
  {
    id: "unas",
    label: "Uñas",
    sections: [
      {
        label: "Paquetes Destacados",
        items: [
          { name: "Esculpido + Manicura + Semipermanente (Long. 2)", price: "Gs. 270.000", isPackage: true },
          { name: "Kapping + Manicura + Semipermanente (Long. 2)", price: "Gs. 270.000", isPackage: true },
          { name: "Manicura + Semipermanente", price: "Gs. 135.000", isPackage: true },
        ],
      },
      {
        label: "Servicios Individuales",
        items: [
          { name: "Uñas Esculpidas (Acrílico / Gel / Polygel)", desc: "Construcción completa con acabado impecable.", price: "Gs. 120.000" },
          { name: "Esmaltado Semipermanente", desc: "Larga duración con brillo intenso.", price: "Gs. 80.000" },
          { name: "Kapping / Soft Gel", desc: "Refuerzo natural y flexible con acabado prémium.", price: "Gs. 90.000" },
          { name: "Spa de Manos y Pies", desc: "Exfoliación profunda, hidratación y esmaltado.", price: "Gs. 130.000" },
          { name: "Diseños Personalizados (Nail Art)", desc: "Desde minimalista hasta editorial.", price: "Gs. 50.000", fullWidth: true },
        ],
      },
    ],
  },
  {
    id: "pelo",
    label: "Pelo",
    sections: [
      {
        label: "Peinados",
        items: [
          {
            name: "Recogido",
            variants: [
              { label: "Corto", price: "Gs. 200.000" },
              { label: "Mediano", price: "Gs. 220.000" },
              { label: "Largo", price: "Gs. 240.000" },
              { label: "Extra Largo", price: "Gs. 260.000" },
            ],
          },
          {
            name: "Semi Recogido",
            variants: [
              { label: "Corto", price: "Gs. 160.000" },
              { label: "Mediano", price: "Gs. 180.000" },
              { label: "Largo", price: "Gs. 200.000" },
              { label: "Extra Largo", price: "Gs. 220.000" },
            ],
          },
        ],
      },
      {
        label: "Paquetes Novias & Quinceañeras",
        items: [
          { name: "Pack Clásico", desc: "Lavado + Peinado + Maquillaje + Pestañas", price: "Gs. 735.000", isPackage: true },
          { name: "Pack Elegante", desc: "Lavado L'Oréal + Peinado + Maquillaje + Pestañas + Manos + Semi", price: "Gs. 890.000", isPackage: true },
          { name: "Pack Premium", desc: "Lavado L'Oréal + Peinado + Maquillaje + Pestañas + Uñas Esculpidas", price: "Gs. 980.000", isPackage: true },
          { name: "Pack VIP Rossie", desc: "Lavado L'Oréal + Peinado + Maquillaje + Pestañas + Uñas Esculpidas + Baño de Luna", price: "Gs. 1.300.000", isPackage: true },
        ],
      },
      {
        label: "Cortes y Coloración",
        items: [
          { name: "Lavado, Brushing y Cortes Profesionales", price: "Gs. 90.000" },
          { name: "Rituales Capilares", desc: "Nutrición y reconstrucción intensiva.", price: "Gs. 160.000" },
          { name: "Mechas / Balayage / Reflejos Premium", price: "Gs. 450.000" },
          { name: "Alisado Avanzado", price: "Gs. 420.000" },
        ],
      },
    ],
  },
  {
    id: "skincare",
    label: "Skincare",
    sections: [
      {
        label: "Paquete Combinado",
        items: [
          { name: "Tratamiento Facial Exclusivo + Reflexología Podal Profunda", price: "Gs. 387.000", isPackage: true },
        ],
      },
      {
        label: "Ojos y Cejas",
        items: [
          { name: "Lifting de Pestañas + Tinte + Hidratación + Diseño + Epilación", price: "Gs. 290.000" },
          { name: "Brow Lamination + Hidragloss", price: "Gs. 350.000" },
          { name: "Hidragloss", desc: "Tratamiento hidratante de alto impacto.", price: "Gs. 190.000" },
        ],
      },
      {
        label: "Faciales Clínicos",
        items: [
          { name: "Limpieza Profunda / Antiage / Tratamiento de Acné", price: "Gs. 180.000" },
          { name: "Dermaplaning / Punta de Diamante / Oxidermis", price: "Gs. 240.000" },
          { name: "Hollywood Peel", price: "Gs. 380.000" },
        ],
      },
      {
        label: "Micropigmentación Avanzada",
        items: [
          { name: "Microblading / Microshading / Microlips", price: "Gs. 850.000" },
          { name: "Delineado Clásico y Softliner", price: "Gs. 750.000" },
          { name: "Camuflaje de Estrías", price: "Gs. 600.000" },
        ],
      },
    ],
  },
  {
    id: "makeup",
    label: "Make-up",
    sections: [
      {
        label: "Maquillaje",
        items: [
          { name: "Maquillaje Social", desc: "Look natural a sofisticado para cualquier ocasión.", price: "Gs. 200.000" },
          { name: "Maquillaje Artístico / Conceptual", desc: "Propuestas creativas y de alta producción.", price: "Gs. 280.000" },
          { name: "Maquillaje de Gala", desc: "Novias, quinceañeras y debutantes.", price: "Gs. 450.000" },
        ],
      },
    ],
  },
  {
    id: "podologia",
    label: "Podología",
    availabilityNote: "Disponible únicamente en Casa Central (España) · Mar. a Vie. 13:00–18:00 hs | Sáb. 10:00–18:00 hs",
    sections: [
      {
        label: "Plástica en Pies",
        items: [
          { name: "Grado 1", desc: "Remoción de callosidades, belleza de cutícula y esmaltado regular.", price: "Gs. 180.000" },
          { name: "Grado 2", desc: "Tratamiento completo de grado medio.", price: "Gs. 220.000" },
          { name: "Grado 3", desc: "Intervención especializada en casos avanzados.", price: "Gs. 260.000" },
        ],
      },
      {
        label: "Clínica Podológica",
        items: [
          { name: "Micosis / Verrugas / Uñas Encarnadas / Ortonixia", price: "Gs. 150.000" },
          { name: "Podología para Pies Diabéticos", price: "Gs. 190.000" },
          { name: "Láser para Micosis", price: "Gs. 260.000" },
        ],
      },
    ],
  },
  {
    id: "masaje",
    label: "Masaje",
    sections: [
      {
        label: "Paquete Especial Verano",
        items: [
          {
            name: "Drenaje + Reductor + Maderoterapia (10 Sesiones)",
            price: "Gs. 1.440.000",
            originalPrice: "Gs. 1.800.000",
            badge: "-20%",
            featured: true,
          },
        ],
      },
      {
        label: "Masajes y Rituales",
        items: [
          { name: "Baño de Luna (Cuerpo completo)", price: "Gs. 350.000" },
          { name: "Masaje Descontracturante Zona Superior", variants: [{ label: "30 min", price: "Gs. 120.000" }, { label: "50 min", price: "Gs. 180.000" }] },
          { name: "Reflexología en Manos o Pies", variants: [{ label: "30 min", price: "Gs. 100.000" }, { label: "50 min", price: "Gs. 150.000" }] },
          { name: "Masaje Relax con Piedras Calientes", variants: [{ label: "50 min", price: "Gs. 250.000" }, { label: "80 min", price: "Gs. 300.000" }] },
          { name: "Masaje Reductor / Reafirmante / Drenaje Linfático", price: "Gs. 180.000" },
          { name: "Pulido Corporal / Antiage Espalda / Depilación con Cera e Hilo", price: "Gs. 150.000" },
        ],
      },
    ],
  },
];

/* ─── Helpers ─── */
function gridClass(count: number): string {
  if (count === 1) return "grid-cols-1";
  if (count === 2 || count === 4) return "grid-cols-1 sm:grid-cols-2";
  if (count % 3 === 0) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2";
}

/* ─── Sub-components ─── */
function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <div className={`bg-[#FEFCF9] p-6 md:p-8 hover:bg-white transition-colors duration-300 group relative ${item.featured ? "border-l-2 border-[#B8946A]" : ""} ${item.fullWidth ? "sm:col-span-2" : ""}`}>
      {/* Badge */}
      {item.badge && (
        <span className="absolute top-4 right-4 bg-[#B8946A] text-white text-[10px] tracking-widest px-2 py-0.5 uppercase">
          {item.badge}
        </span>
      )}

      <span className="text-xs text-[#B8946A] tracking-[0.2em] font-medium block mb-3">
        0{index + 1}
      </span>

      <h3
        className="text-lg md:text-xl lg:text-2xl font-light text-[#1A1A1A] mb-2 leading-snug"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        {item.name}
      </h3>

      {item.desc && (
        <p className="text-xs text-[#3A3A3A] leading-relaxed font-light mb-3">{item.desc}</p>
      )}

      {/* Variants */}
      {item.variants && (
        <div className="mt-3 space-y-1.5">
          {item.variants.map((v) => (
            <div key={v.label} className="flex justify-between items-center text-xs md:text-sm">
              <span className="text-[#3A3A3A] font-light">{v.label}</span>
              <span className="text-[#7A5C3A] font-medium" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                {v.price}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Price */}
      {item.price && !item.variants && (
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          <span
            className="text-base md:text-lg text-[#7A5C3A] font-medium"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {item.price}
          </span>
          {item.originalPrice && (
            <span className="text-xs text-[#888888] line-through font-light">
              {item.originalPrice}
            </span>
          )}
        </div>
      )}

      <div className="mt-4 h-px bg-[#E8DDD5] group-hover:bg-[#B8946A]/40 transition-colors duration-500" />
    </div>
  );
}

function SectionBlock({ section, sectionIndex }: { section: Section; sectionIndex: number }) {
  return (
    <div className={sectionIndex > 0 ? "mt-6" : ""}>
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#7A5C3A] mb-3 px-1">
        {section.label}
      </p>
      <div className={`grid gap-px bg-[#E8DDD5] ${gridClass(section.items.length)}`}>
        {section.items.map((item, i) => (
          <ServiceCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
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
          className="flex flex-wrap gap-2 mb-8 md:mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 md:px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                active === cat.id
                  ? "bg-[#1A1A1A] text-white"
                  : "border border-[#E8DDD5] text-[#6B6B6B] hover:border-[#B8946A] hover:text-[#B8946A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Availability note (Podología) */}
        {current.availabilityNote && (
          <motion.div
            key={`note-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-start gap-2 bg-[#FEFCF9] border border-[#E8DDD5] px-5 py-3"
          >
            <svg className="w-3.5 h-3.5 text-[#B8946A] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-[#3A3A3A] font-light italic leading-relaxed">
              {current.availabilityNote}
            </p>
          </motion.div>
        )}

        {/* Sections */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {current.sections.map((section, si) => (
            <SectionBlock key={si} section={section} sectionIndex={si} />
          ))}
        </motion.div>

        {/* Price note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-xs text-[#6B6B6B] tracking-wide"
        >
          * Precios referenciales. Consultar variaciones según diseño o extensión del servicio.
        </motion.p>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 pt-8 border-t border-[#E8DDD5]"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8946A]/70 mb-4">
            Medios de pago
          </p>
          <div className="flex flex-wrap gap-4 mb-3">
            {[
              { icon: "💵", label: "Efectivo" },
              { icon: "💳", label: "Tarjeta de Crédito / Débito" },
              { icon: "📱", label: "Pagos con QR" },
            ].map((m) => (
              <span
                key={m.label}
                className="inline-flex items-center gap-1.5 text-xs text-[#6B6B6B] font-light border border-[#E8DDD5] px-3 py-1.5"
              >
                <span>{m.icon}</span> {m.label}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-[#C4A0A0] font-light italic">
            × No se aceptan transferencias bancarias ni cheques.
          </p>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://www.instagram.com/rossie_beauty_center"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#E8DDD5] text-[#6B6B6B] text-xs tracking-[0.2em] uppercase hover:border-[#B8946A] hover:text-[#B8946A] transition-all duration-300"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Descubrí más en{" "}
            <span className="font-medium group-hover:text-[#B8946A]">@rossie_beauty_center</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
