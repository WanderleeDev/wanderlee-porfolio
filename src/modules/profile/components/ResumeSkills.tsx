import {
  mySkills,
  learningSkills,
  othersSkills,
} from "../../technologies/const/technologies";
import cv from "../docs/example.pdf";
import { GroupCategory, type SkillCategory } from "./GroupCategory";

interface Route {
  name: string;
  path: string;
}

export function ResumeSkills() {
  const externalLinks: Route[] = [
    { name: "github", path: "https://github.com/WanderleeDev" },
    { name: "linkedin", path: "https://www.linkedin.com/in/wanderlee-max/" },
    { name: "cv", path: cv },
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: "Main Skills",
      skills: mySkills.techs,
      gradient: "bg-gradient-to-r from-blue-600 to-blue-400",
    },
    {
      title: "Currently learning",
      skills: learningSkills.techs,
      gradient: "bg-gradient-to-r from-purple-600 to-purple-400",
    },
    {
      title: "Used occasionally",
      skills: othersSkills.techs,
      gradient: "bg-gradient-to-r from-green-600 to-green-400",
    },
  ];

  const stylesLink = `font-inherit font-extrabold cursor-pointer relative border-none bg-transparent uppercase transition-[color] duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] after:content-[''] after:pointer-events-none after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-[width,left] after:duration-[400ms] after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0 focus:after:w-full focus:after:left-0 text-high-green`;

  return (
    <section className="max-w-3xl mx-auto p-6 space-y-8 dark:bg-[#2f2f2f] dark:text-white">
      <h2 className="text-clamp-lg font-medium text-center mb-8">
        Wanderlee Max Frontend Developer
      </h2>

      <div className="space-y-6">
        <article className="rounded-lg py-6 flex flex-wrap sm:flex-nowrap gap-8">
          <img
            className="aspect-square object-cover object-top rounded-full shadow-lg mx-auto md:mx-auto"
            src="https://res.cloudinary.com/dy8gpozi6/image/upload/v1729015133/myPhoto_ze3egz.webp"
            alt="wanderlee photo"
            width={150}
            height={150}
          />
          <div className="flex flex-wrap gap-6 md:gap-4">
            <p className="text-pretty text-sm md:text-base text-left">
              I develop and implement web interfaces from scratch, 100%
              responsive oriented to accessibility using various technologies,
              currently training in backend development
            </p>

            <div className="flex gap-4 flex-wrap items-center">
              {externalLinks.map(({ name, path }) =>
                URL.canParse(path) ? (
                  <a
                    key={name}
                    className={stylesLink}
                    target="_blank"
                    href={path}
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                ) : (
                  <a
                    key={name}
                    className={stylesLink}
                    download="Wanderlee-cv.pdf"
                    href={path}
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                )
              )}
            </div>
          </div>
        </article>

        {skillCategories.map((category) => (
          <GroupCategory key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
