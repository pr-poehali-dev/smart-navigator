import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,8,6,0.65)" }} />
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-6 uppercase z-10 text-xs tracking-[0.35em] font-light" style={{ color: "hsl(43, 74%, 58%)" }}>
        Ваш проект заслуживает сильного образа
      </h3>

      <p className="absolute bottom-12 left-6 right-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl z-10 font-light leading-tight" style={{ color: "hsl(45, 20%, 92%)" }}>
        Креативная концепция, которая продаёт ещё до старта продаж.
        <span style={{ color: "hsl(43, 74%, 58%)" }}> Я помогаю создавать образ проекта</span> — от первого слова до финального штриха в его визуальном воплощении.
      </p>
    </div>
  );
}