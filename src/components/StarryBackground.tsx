import { memo, ReactNode } from "react";

type StarryBackgroundProps = {
  children: ReactNode;
};

const StarryBackground = memo(function StarryBackground({
  children,
}: StarryBackgroundProps) {
  const stars = Array.from({ length: 100 }, (_, i) => {
    const size = Math.random() < 0.8 ? 1 : Math.random() < 0.9 ? 2 : 3;
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const delay = `${Math.random() * 4}s`;

    let animationClass = "";
    if (size === 1) animationClass = "animate-twinkle-fast";
    else if (size === 2) animationClass = "animate-twinkle-medium";
    else animationClass = "animate-twinkle-slow";

    return (
      <div
        key={i}
        className={`absolute rounded-full bg-white ${animationClass}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top,
          left,
          animationDelay: delay,
        }}
      />
    );
  });

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-indigo-950 to-blue-950 overflow-hidden flex flex-col items-center justify-center">
      {stars}
      <div className="relative z-10">{children}</div>
    </div>
  );
});

export default StarryBackground;
