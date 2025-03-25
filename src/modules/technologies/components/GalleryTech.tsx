import Marquee from "./Marquee";
import { useTechnologies, type GalleryKey } from "../hooks/useTechnologies";
import Button from "./Button";
import { Icon } from "@iconify/react";
import { mySkills } from "../const/technologies";

export default function GalleryTech() {
  const { currentTech, updateCurrentTech, galleryData, updateGalleryData } =
    useTechnologies(mySkills);
  const actions: GalleryKey[] = ["technologies", "learning", "others"];

  return (
    <>
      <div className="flex flex-wrap gap-8 py-[.7rem] m-[3rem_0_1.5rem_0] justify-center items-center bg-black/25 backdrop-blur-sm ">
        {actions.map((action, i) => (
          <Button
            key={i}
            className={`min-w-32 min-h-8 p-[.3rem_.5rem] capitalize cursor-pointer transition-colors duration-200 hover:text-high-light hover:font-semibold hover:bg-black/20 hover:rounded-lg hover:border-[0.15rem_solid_rgba(255,255,255,0.493)] ${currentTech}`}
            onClick={() => updateGalleryData(action)}
          >
            {action}
          </Button>
        ))}
      </div>

      <figure className="grid gap-8 p-4 pt-8">
        <div className="h-fit font-semibold absolute left-2/4 rotate-90 -z-10 top-10">
          <Marquee isReverseScroll={true} valueMarquee={currentTech} />
        </div>

        <div className="h-fit font-semibold absolute left-2/4 rotate-90 -z-10 top-30">
          <Marquee isReverseScroll={false} valueMarquee={currentTech} />
        </div>

        <div className="justify-self-center grid grid-cols-[repeat(auto-fit,minmax(min(2rem,100%),1fr));] gap-8 w-full xs:grid-cols-6 xs:w-auto md:gap-10">
          {galleryData.techs.map(({ color, icon, name }) => (
            <button
              key={name}
              className="cursor-pointer starting:blur-xs starting:opacity-0 transition-all duration-300"
              title={`show tech name: ${name}`}
              onMouseEnter={() => updateCurrentTech({ color, icon, name })}
            >
              <Icon
                className="h-8 transition-all bg-transparent object-contain aspect-square hover:translate-y-[-0.4rem] hover:drop-shadow-[-2px_0px_9px_currentColor]"
                icon={icon}
                style={{ color }}
                width="32"
                height="32"
                ssr={true}
              />
            </button>
          ))}
        </div>

        <figcaption className="text-center font-semibold text-clamp-sm">
          {galleryData.title}
        </figcaption>
      </figure>
    </>
  );
}

// .top-10 {
//   top: 10%;
//   rotate: 9deg;
// }

// .top-30 {
//   top: 30%;
//   rotate: -5deg;
// }
