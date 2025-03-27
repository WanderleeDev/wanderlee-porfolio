import { Icon } from "@iconify/react";
import type { Tech } from "../models/Gallery.model";
import "@fontsource/tourney/100.css";
import { useTechMarquee } from "../hooks/useTechMarquee";

interface MarqueeProps {
  data: Tech[];
  duplications?: number;
  speed?: number;
  pauseOnHover?: boolean;
}

export default function TechMarquee({
  data = [],
  duplications = 3,
  speed = 40,
}: MarqueeProps) {
  const { currentTech, observerRef, marqueeRef } = useTechMarquee<Tech>(data);

  if (data.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 py-4">
      <div
        id="techMarquee"
        ref={observerRef}
        className="w-[20%] left-2/4 -translate-x-2/4 absolute bg-transparent"
      ></div>

      <div
        ref={marqueeRef}
        className="w-full max-w-full overflow-hidden bg-white/10 py-6 relative"
      >
        <div
          className="marquee flex w-max not-motion-reduce:animate-autoScroll"
          style={{
            animationDuration: `${speed}s`,
          }}
        >
          {[...Array(duplications)].map((_, i) => (
            <div key={i} className="flex items-center">
              {data.map(({ color, icon, name }, index) => (
                <div
                  data-tech={name.toLowerCase()}
                  key={`${i}-${index}`}
                  style={{ color }}
                  className={`flex items-center justify-center size-12 p-2 mx-8 bg-current/15 rounded-xl transition-transform duration-200 hover:scale-110 flex-shrink-0 cursor-pointer hover:drop-shadow-[-2px_0px_9px_currentColor] ${`bg-[${color}]`}`}
                  title={name}
                >
                  <Icon
                    className="h-8 transition-all bg-transparent object-contain aspect-square"
                    aria-hidden="true"
                    icon={icon}
                    style={{ color }}
                    width="32"
                    height="32"
                    ssr={true}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <strong
        style={{ color: currentTech?.color }}
        className="text-center font-semibold block font-tourney text-clamp-lg capitalize"
      >
        {currentTech?.name}
      </strong>
    </div>
  );
}
