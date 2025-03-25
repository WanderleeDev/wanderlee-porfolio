import { useContext, useState } from "react";
import "./GalleryTech.scss";
import TechContext from "../../context/TechContext";
import Marquee from "../../../../modules/technologies/components/Marquee";
import type { IMarqueeData } from "../../../../interfaces/ITechnology.interface";

const GalleryTech = (): JSX.Element => {
  const {
    gallery: { tech, title },
  } = useContext(TechContext);
  const [valueScroll, setValueScroll] = useState<IMarqueeData>({
    name: "",
    color: "#fff",
  });

  const updateScroll = (name: string, color: string): void => {
    setValueScroll({ name, color });
  };

  return (
    <figure className="gallery">
      <div className="scroll top-10">
        <Marquee isReverseScroll={true} valueMarquee={valueScroll} />
      </div>
      <div className="scroll top-30">
        <Marquee isReverseScroll={false} valueMarquee={valueScroll} />
      </div>
      <div className="gallery-icons">
        {tech.map((t, i) => (
          <img
            key={i}
            onMouseEnter={() => {
              updateScroll(t.name, t.color);
            }}
            style={{ color: t.color }}
            width={32}
            height={32}
            className="gallery-img"
            src={t.svg}
            alt={`icon ${t.name}`}
            title={t.name}
          />
        ))}
      </div>
      <figcaption className="gallery-title">{title}</figcaption>
    </figure>
  );
};

export default GalleryTech;
