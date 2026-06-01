"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const reviews = [
  {
    name: "Helen Pekholtz",
    text: "Excelente servicio y atención. El corte de Marcelo Narvaja impecable, y si estás buscando un rubio delicado, te recomiendo sin dudas pedir turno con Marcelo. Y para maquillaje, Irma es una excelente profesional. Lo que más me gusta de la sucursal de España es que tienen amplio estacionamiento y los sillones masajeadores!",
    rating: 5,
  },
  {
    name: "Iris de Mestral",
    text: "Las mejores artistas para las uñas, servicio excelente, un montón de colores para elegir y se renuevan siempre, también se están capacitando constantemente con nuevas técnicas! Te asesoran de lo mejor.",
    rating: 5,
  },
  {
    name: "Patty Marecos",
    text: "Buenísima atención, profesionales excelentes! Buen lugar para pasar un día de spa súper relajado. 100% recomendado.",
    rating: 5,
  },
  {
    name: "Gabriela Zuain",
    text: "Excelente atención y servicio. Feliz con el resultado!",
    rating: 5,
  },
  {
    name: "Wilma Jara",
    text: "Es el mejor de todos los spa de manos y pies... Son lo máaas.",
    rating: 5,
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#B8946A]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive((a) => (a + 1) % reviews.length);

  return (
    <section id="reviews" className="py-32 md:py-40 bg-[#FEFCF9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#B8946A] text-xs tracking-[0.4em] uppercase mb-6"
        >
          — Lo que dicen nuestras clientas
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl md:text-6xl font-light text-[#1A1A1A] mb-20 max-w-xl"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Experiencias que{" "}
          <span className="italic text-[#C4A0A0]">inspiran</span>
        </motion.h2>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative"
        >
          {/* Main review card */}
          <div className="min-h-[260px] flex flex-col justify-between bg-white border border-[#E8DDD5] p-10 md:p-14 relative overflow-hidden">
            {/* Decorative quote mark */}
            <span
              className="absolute top-6 right-10 text-9xl font-light text-[#E8DDD5] leading-none select-none"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              "
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <Stars />
                <p
                  className="text-[#1A1A1A] text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-3xl italic"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  "{reviews[active].text}"
                </p>
                <p className="text-sm text-[#B8946A] tracking-[0.15em] uppercase font-light">
                  — {reviews[active].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#E8DDD5] flex items-center justify-center text-[#6B6B6B] hover:border-[#B8946A] hover:text-[#B8946A] transition-colors duration-300"
              aria-label="Anterior"
            >
              ←
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? "w-6 h-1.5 bg-[#B8946A]" : "w-1.5 h-1.5 bg-[#E8DDD5]"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-[#E8DDD5] flex items-center justify-center text-[#6B6B6B] hover:border-[#B8946A] hover:text-[#B8946A] transition-colors duration-300"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Small grid of all reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8DDD5] mt-12"
        >
          {reviews.map((review, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`p-6 text-left transition-all duration-300 ${
                active === i ? "bg-[#F0E6E6]/60" : "bg-[#FEFCF9] hover:bg-white"
              }`}
            >
              <Stars />
              <p className="text-sm text-[#6B6B6B] leading-relaxed font-light line-clamp-2 mb-3">
                "{review.text}"
              </p>
              <p className="text-xs text-[#B8946A] tracking-[0.1em] uppercase">
                {review.name}
              </p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
