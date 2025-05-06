import { useEffect, useState, useRef } from "react";
import { Carousel } from "../components/Carousel";

export function SecondPage() {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const memoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const timeDiff = Date.now() - new Date("2024-09-12").getTime();

      setHours(Math.floor(timeDiff / (1000 * 60 * 60)));
      setMinutes(Math.floor(timeDiff / (1000 * 60)) % 60);
      setSeconds(Math.floor(timeDiff / 1000) % 60);

      const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
      const monthsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      setYears(yearsDiff);
      setMonths(monthsDiff - yearsDiff * 12);
      setDays(daysDiff - monthsDiff * 30);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (memoriesRef.current) {
      observer.observe(memoriesRef.current);
    }

    return () => {
      if (memoriesRef.current) {
        observer.unobserve(memoriesRef.current);
      }
    };
  }, []);

  return (
    <section>
      <div
        className="w-full bg-gradient-to-b from-blue-950 via-slate-950 to-blue-950 py-40 px-4 min-h-screen flex flex-col justify-center"
        id="time"
      >
        <div
          ref={memoriesRef}
          className={`mx-auto w-full max-w-6xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-yellow-300 text-center text-3xl font-bold mb-8">
            Nossas Memórias
          </h2>
          <Carousel className="bg-blue-950/20 p-4 rounded-lg backdrop-blur-sm" />
        </div>

        <div
          className={`text-slate-300 font-bold transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <p className="text-center xs:w-full md:w-[60%] lg:w-[40%] mx-auto mt-12">
            Querida Malu, fiz essa pequena surpresa para tentar demonstrar com
            atos concretos o tanto que eu te amo. Eu nao consigo demonstrar
            muita coisa pois fui criado sem muita demonstracao fisica de amor,
            entao eu literalmente nao sei demonstrar. <br />
            Te amo gata S2
          </p>
        </div>

        <p
          className={`text-indigo-400 text-center text-2xl font-bold mt-30 sm:mt-36 md:mt-44 lg:mt-56 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          Com você, sou <strong className="text-yellow-300">feliz</strong> há
          exatos {years} anos, {months} meses, {days} dias, <br />
          {hours} horas, {minutes} minutos e {seconds} segundos
        </p>
      </div>
    </section>
  );
}
