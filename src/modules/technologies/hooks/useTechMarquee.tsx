import { useEffect, useRef, useState } from "react";

interface BaseProps {
  name: string;
  color: string;
}

export function useTechMarquee<T extends BaseProps>(data: T[]) {
  const [currentTech, setCurrentTech] = useState<T | null>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!observerRef.current || !marqueeRef.current || data.length === 0) {
      return;
    }

    const updateCurrentTech = () => {
      const techIcons = marqueeRef.current?.querySelectorAll("[data-tech]");
      const observerRect = observerRef.current?.getBoundingClientRect();

      if (!techIcons || techIcons.length === 0 || !observerRect) return;

      const intersectingTech = Array.from(techIcons).find((icon) => {
        const iconRect = icon.getBoundingClientRect();

        return (
          iconRect.left < observerRect.right &&
          iconRect.right > observerRect.left
        );
      });

      const techElement = intersectingTech?.getAttribute("data-tech");
      const techData = data.find(
        (tech) => tech.name.toLowerCase() === techElement?.toLowerCase()
      );

      if (techData) {
        setCurrentTech(techData);
      }
    };

    const mutationObserver = new MutationObserver(updateCurrentTech);

    mutationObserver.observe(marqueeRef.current, {
      childList: true,
      subtree: true,
    });

    updateCurrentTech();

    const animationFrame = requestAnimationFrame(function checkIntersection() {
      updateCurrentTech();
      requestAnimationFrame(checkIntersection);
    });

    return () => {
      mutationObserver.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [data]);

  return {
    currentTech,
    observerRef,
    marqueeRef,
  };
}
