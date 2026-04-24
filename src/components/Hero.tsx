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
          src="https://cdn.poehali.dev/projects/97849ccb-6d34-44bc-982f-740043ed9cbc/files/3f260adb-183a-4fcd-b281-c4c134ca3d65.jpg"
          alt="Mystical cosmic arcana"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm mb-4 opacity-70">Нумерология дня рождения</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ТВОЙ<br />АРКАН
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-8">
          Узнай число твоей судьбы по дате рождения и раскрой послание Старших Арканов Таро
        </p>
        <a
          href="#calculator"
          className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-transparent hover:text-white border border-white transition-all duration-300"
        >
          Рассчитать
        </a>
      </div>
    </div>
  );
}