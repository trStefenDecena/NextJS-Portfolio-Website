import React from "react";
import Image from "next/image";
import { SkillItem } from "./SkillItem";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem
            skillName="HTML"
            skillSrc="/../public/assets/skills/html.png"
          />
          <SkillItem
            skillName="CSS"
            skillSrc="/../public/assets/skills/css.png"
          />
          <SkillItem
            skillName="JavaScript"
            skillSrc="/../public/assets/skills/javascript.png"
          />
          <SkillItem
            skillName="React"
            skillSrc="/../public/assets/skills/react.png"
          />
          <SkillItem
            skillName="Tailwind"
            skillSrc="/../public/assets/skills/tailwind.png"
          />
          <SkillItem
            skillName="Node.js"
            skillSrc="/../public/assets/skills/nodejs.png"
          />
          <SkillItem
            skillName="Next.js"
            skillSrc="/../public/assets/skills/nextjs.png"
          />
          <SkillItem
            skillName="Python"
            skillSrc="/../public/assets/skills/python.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
