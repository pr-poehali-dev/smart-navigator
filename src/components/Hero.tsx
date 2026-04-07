import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,8,6,0.55) 0%, rgba(10,8,6,0.3) 50%, rgba(10,8,6,0.7) 100%)" }} />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.4em] text-xs mb-8 font-light" style={{ color: "hsl(43, 74%, 58%)" }}>
          Комплексный брендинг
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          БРЕНД
          <br />
          <span style={{ color: "hsl(43, 74%, 58%)" }}>С НУЛЯ</span>
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-70 font-light leading-relaxed mt-8">
          Нейминг, визуализации, креативные концепции — всё для вашего строительного объекта в одном месте
        </p>
        <div className="mt-12">
          <a
            href="#services"
            className="inline-block uppercase text-xs tracking-[0.3em] px-10 py-4 border transition-all duration-300 hover:text-black"
            style={{
              borderColor: "hsl(43, 74%, 58%)",
              color: "hsl(43, 74%, 58%)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(43, 74%, 58%)";
              (e.currentTarget as HTMLElement).style.color = "#0a0806";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "hsl(43, 74%, 58%)";
            }}
          >
            Узнать больше
          </a>
        </div>
      </div>
    </div>
  );
}
