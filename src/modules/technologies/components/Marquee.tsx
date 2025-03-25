import React from "react";
import "@fontsource/tourney/100.css";

import type { Tech } from "../models/Gallery.model";

interface Props {
  valueMarquee: Tech | null;
  numbersMarquee?: number;
  isReverseScroll: boolean;
}

export default function Marquee({
  valueMarquee,
  numbersMarquee,
  isReverseScroll,
}: Props): React.ReactNode {
  if (!valueMarquee) {
    return null;
  }

  const valuesMarquee = Array<string>(10).fill(valueMarquee.name);
  const marquees: string[] = Array(numbersMarquee ?? 3).fill("");

  return (
    <div
      className="w-full grid grid-cols-10 overflow-hidden text-clamp-lg select-none font-tourney"
      style={{ color: valueMarquee.color }}
    >
      {marquees.map((_, index) => (
        <div
          className={`flex gap-[calc(10vw+4rem)] min-w-full flex-none justify-around text-inherit ${
            isReverseScroll ? "animate-marquee-reverse" : "animate-marquee"
          }`}
          role="marquee"
          key={index}
        >
          {valuesMarquee.map((value, i) => (
            <span
              key={index + i}
              className="py-2 font-inherit text-inherit w-max inline-block font-thin mix-blend-difference"
            >
              {value}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
