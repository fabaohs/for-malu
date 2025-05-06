import StarryBackground from "../components/StarryBackground";
import { scroller } from "react-scroll";

export function FirstPage() {
  const handleClick = () => {
    scroller.scrollTo("time", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <StarryBackground>
      <section
        className="flex flex-col items-center text-yellow-100 py-10"
        id="love-u"
      >
        <h1 className="text-6xl font-bold mb-2 animate-fade-in fade-in-1s text-shadow-lg">
          Olá,{" "}
          <span className="text-amber-300 fade-in-1-5s text-shadow-lg">
            Malu!
          </span>
        </h1>
        <div className="max-w-80 text-center fade-in-2-5s">
          <p className="text-4xl font-semibold text-shadow-md">
            Fiz esse pequeno site para dizer que{" "}
            <strong className="text-amber-400 fade-in-3-5s text-shadow-lg">
              te amo!
            </strong>
          </p>
        </div>
        <button
          className="mt-6 text-neutral-700 bg-amber-400 rounded-lg px-4 py-2 font-semibold cursor-pointer hover:bg-amber-500 hover:text-neutral-800 transition-all"
          onClick={handleClick}
        >
          Ver mais...
        </button>
      </section>
    </StarryBackground>
  );
}
