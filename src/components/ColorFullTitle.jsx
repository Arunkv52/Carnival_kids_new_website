// ColorfulTitle.jsx
import React from "react";

export default function ColorfulTitle() {
  const text = "Carnival kids";
  // pick as many Tailwind text color utilities as you like
  const colors = [
    "text-pink-500",
    "text-red-500",
    "text-orange-400",
    "text-amber-400",
    "text-yellow-400",
    "text-lime-500",
    "text-green-500",
    "text-emerald-500",
    "text-teal-500",
    "text-cyan-500",
    "text-sky-500",
    "text-blue-500",
    "text-indigo-500",
    "text-violet-500",
    "text-purple-500",
  ];

  return (
    <p className="text-[#95c535] md:text-[20px] text-base uppercase font-bold">
      Welcome To{" "}
      <span aria-hidden="true" className="inline-block">
        {text.split("").map((ch, i) => {
          // keep spaces visually (adjust width as needed)
          if (ch === " ") {
            return <span key={i} className="inline-block w-2" />;
          }
          const colorClass = colors[i % colors.length];
          // inline-block keeps letters from collapsing for transforms/spacing
          return (
            <span
              key={i}
              className={`${colorClass} inline-block`}
              aria-label={ch}
            >
              {ch}
            </span>
          );
        })}
      </span>
    </p>
  );
}
