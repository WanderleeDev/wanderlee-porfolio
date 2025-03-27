import { useTechnologies, type GalleryKey } from "../hooks/useTechnologies";
import Button from "./Button";
import { mySkills } from "../const/technologies";
import MarqueeTech from "./MarqueeTech";

export default function GalleryTech() {
  const { galleryData, updateGalleryData } = useTechnologies(mySkills);
  const sections: GalleryKey[] = ["my skills", "learning", "others"];

  function getActiveClass(section: GalleryKey): string {
    return galleryData.label.toLowerCase() === section.toLowerCase()
      ? "text-high-light ring-4 bg-transparent"
      : "";
  }

  return (
    <article>
      <h2 className="sr-only">My skills</h2>

      <div className="flex flex-wrap gap-8 py-4 m-[3rem_0_1.5rem_0] justify-center items-center bg-black/25 backdrop-blur-sm">
        {sections.map((section, i) => (
          <Button
            key={i}
            className={getActiveClass(section)}
            onClick={() => updateGalleryData(section)}
          >
            {section}
          </Button>
        ))}
      </div>

      <strong className="text-center text-clamp-sm tracking-widest  block mb-2">
        {galleryData.title}
      </strong>

      <MarqueeTech data={galleryData.techs} />
    </article>
  );
}
