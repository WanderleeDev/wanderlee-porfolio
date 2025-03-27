import { useEffect, useRef, useState } from "react";
import type { Gallery, Tech } from "../models/Gallery.model";
import { mySkills, learningSkills, othersSkills } from "../const/technologies";

interface UseTechnologies {
  galleryData: Gallery;
  currentTech: string | null;
  updateCurrentTech: (tech: string) => void;
  updateGalleryData: (keyGallery: GalleryKey) => void;
}

export type GalleryKey = "my skills" | "learning" | "others";

const GalleryData: Record<GalleryKey, Gallery> = {
  "my skills": mySkills,
  learning: learningSkills,
  others: othersSkills,
};

export function useTechnologies(data: Gallery): UseTechnologies {
  const [galleryData, setGalleryData] = useState<Gallery>(data);
  const [currentTech, setCurrentTech] = useState<string | null>(null);
  const [index, setIndex] = useState<number>(0);

  const updateCurrentTech = (tech: string): void => setCurrentTech(tech);
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
