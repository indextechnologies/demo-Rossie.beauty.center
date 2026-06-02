"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cursos" className="py-24 md:py-32 bg-[#1A1A1A] text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
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
          className="text-5xl md:text-6xl font-light leading-[1.1] mb-16 text-white"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Maestría que se{" "}
          <span className="italic text-[#C4A0A0]">comparte</span>
        </motion.h2>

        {/* Single course — centered block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-3xl mx-auto border border-white/10 p-10 md:p-14"
        >
          <p className="text-[#B8946A] text-xs tracking-[0.3em] uppercase mb-5">
            Taller exclusivo
          </p>
          <h3
            className="text-3xl md:text-4xl font-light text-white mb-6 leading-snug"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Curso de Automaquillaje
          </h3>

          <div className="w-12 h-px bg-[#B8946A]/50 mb-8" />

          <p className="text-white/60 text-sm leading-loose font-light mb-8">
            Aprendé a realzar tu belleza con técnicas profesionales adaptadas a
            tu propio rostro. Este taller exclusivo dictado por las especialistas
            de Rossie Beauty Center te guía desde la preparación correcta de la
            piel —hidratación, base y corrección— hasta las técnicas de
            visajismo que favorecen cada tipo de estructura facial.
          </p>
          <p className="text-white/60 text-sm leading-loose font-light mb-10">
            Trabajarás la transición fluida del maquillaje de día a noche,
            dominarás el manejo de luz y sombra, y recibirás asesoría
            personalizada sobre los productos esenciales que realmente vale la
            pena invertir según tu tono y rutina. Una experiencia transformadora,
            íntima y con cupos muy limitados.
          </p>

          {/* Highlights */}
          <ul className="grid sm:grid-cols-2 gap-3 mb-10 text-xs text-white/50 tracking-wide">
            {[
              "Preparación y cuidado de la piel",
              "Técnicas de visajismo personalizado",
              "Maquillaje día → noche",
              "Asesoría de productos esenciales",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#B8946A] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/595981673034?text=Hola!%20Me%20interesa%20información%20sobre%20el%20Curso%20de%20Automaquillaje."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border border-[#B8946A] text-[#B8946A] text-xs tracking-[0.2em] uppercase hover:bg-[#B8946A] hover:text-white transition-all duration-300"
          >
            Consultar disponibilidad
          </a>
        </motion.div>
      </div>
    </section>
  );
}
