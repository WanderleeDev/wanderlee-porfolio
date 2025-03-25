import type { mySkills } from "../../technologies/const/technologies";

export interface SkillCategory {
  title: string;
  skills: typeof mySkills.techs;
  gradient: string;
}

export function GroupCategory({ gradient, title, skills }: SkillCategory) {
  return (
    <article className={`${gradient} rounded-lg p-6 overflow-hidden`}>
      <h3 className="text-clamp-md font-medium text-white mb-4 text-left">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 capitalize">
        {skills.map(({ name }) => (
          <div
            key={name}
            title={name}
            className="bg-white dark:bg-[#2f2f2f] rounded-full text-sm px-3 py-1"
          >
            <span
              className={`bg-white dark:text-white ${gradient} bg-clip-text text-transparent font-semibold tracking-widest`}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
