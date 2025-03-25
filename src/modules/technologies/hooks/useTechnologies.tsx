import { useState } from "react";
import type { Gallery, Tech } from "../models/Gallery.model";
import { mySkills, learningSkills, othersSkills } from "../const/technologies";

interface UseTechnologies {
  galleryData: Gallery;
  currentTech: Tech | null;
  updateCurrentTech: (tech: Tech) => void;
  updateGalleryData: (keyGallery: GalleryKey) => void;
}

export type GalleryKey = "technologies" | "learning" | "others";

const GalleryData: Record<GalleryKey, Gallery> = {
  technologies: mySkills,
  learning: learningSkills,
  others: othersSkills,
};

export function useTechnologies(data: Gallery): UseTechnologies {
  const [galleryData, setGalleryData] = useState<Gallery>(data);
  const [currentTech, setCurrentTech] = useState<Tech | null>(null);

  const updateCurrentTech = (tech: Tech): void => setCurrentTech(tech);
  const updateGalleryData = (keyGallery: GalleryKey): void => {
    if (!GalleryData[keyGallery]) return;

    setGalleryData(GalleryData[keyGallery]);
  };

  return {
    galleryData,
    currentTech,
    updateCurrentTech,
    updateGalleryData,
  };
}
