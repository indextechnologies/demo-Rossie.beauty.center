"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const reviews = [
  {
    name: "Helen Pekholtz",
    text: "Excelente servicio y atención. El corte de Marcelo Narvaja impecable, y si estás buscando un rubio delicado, te recomiendo sin dudas pedir turno con Marcelo. Y para maquillaje, Irma es una excelente profesional. Lo que más me gusta de la sucursal de España es que tienen amplio estacionamiento y los sillones masajeadores!",
    rating: 5,
  },
  {
    name: "Iris de Mestral",
    text: "Las mejores artistas para las uñas, servicio excelente, un montón de colores para elegir y se renuevan siempre, también se están capacitando constantemente con nuevas técnicas!!! Te asesoran de lo mejor.",
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

// Duplicated for seamless infinite loop
const doubled = [...reviews, ...reviews];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 text-[#B8946A]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [trackWidth, setTrackWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section id="reviews" className="pt-20 pb-12 bg-[#FEFCF9] overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
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
          className="text-5xl md:text-6xl font-light text-[#1A1A1A] max-w-xl"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Experiencias que{" "}
          <span className="italic text-[#C4A0A0]">inspiran</span>
        </motion.h2>
      </div>

      {/* Infinite auto-scroll carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#FEFCF9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#FEFCF9] to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={trackRef}
          className="flex gap-5"
          animate={trackWidth > 0 && !paused ? { x: [0, -trackWidth] } : { x: 0 }}
          transition={
            trackWidth > 0 && !paused
              ? { repeat: Infinity, repeatType: "loop", duration: 28, ease: "linear" }
              : { duration: 0 }
          }
        >
          {doubled.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] md:w-[400px] bg-white border border-[#E8DDD5] p-8 relative"
            >
              {/* Decorative quote */}
              <span
                className="absolute top-3 right-6 text-6xl font-light text-[#F0E6E6] leading-none select-none"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                "
              </span>
              <Stars />
              <p
                className="text-[#1A1A1A] text-lg font-light leading-relaxed mb-6 relative z-10 italic line-clamp-4"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                "{review.text}"
              </p>
              <p className="text-xs text-[#B8946A] tracking-[0.15em] uppercase font-light">
                — {review.name}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
}
