"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-32 md:py-40 bg-[#FEFCF9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#B8946A] text-xs tracking-[0.4em] uppercase mb-16"
        >
          — Nuestra filosofía
        </motion.p>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text block */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-6xl font-light leading-[1.1] mb-10 text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Un espacio donde la belleza encuentra su{" "}
              <span className="italic text-[#C4A0A0]">esencia</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5 text-[#6B6B6B] text-sm leading-loose font-light"
            >
              <p>
                En Rossie Beauty Center creemos que el cuidado personal es un
                ritual, no una rutina. Cada visita es una experiencia diseñada
                para que te sientas completamente renovada — desde las manos
                hasta los pies, desde los detalles hasta el todo.
              </p>
              <p>
                Nuestro equipo de especialistas combina técnica, precisión y
                estética para ofrecerte resultados que superan las expectativas.
                Utilizamos productos de primera línea y estamos constantemente
                actualizadas con las últimas tendencias del mundo beauty.
              </p>
              <p>
                Dos sucursales en Asunción. Un solo estándar: la excelencia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-10 border-t border-[#E8DDD5] grid grid-cols-3 gap-6"
            >
              {[
                { num: "2", label: "Sucursales" },
                { num: "500+", label: "Clientes felices" },
                { num: "100%", label: "Dedicación" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl font-light text-[#B8946A] mb-1"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {stat.num}
                  </p>
                  <p className="text-xs text-[#6B6B6B] tracking-[0.1em] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[620px] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=85"
                alt="Rossie Beauty Center interior"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative gold border */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[#B8946A]/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
