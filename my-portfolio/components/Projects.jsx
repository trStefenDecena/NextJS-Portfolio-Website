import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg"
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-[#5651e5]">Projects</p>
        <h2 className="py-4">What I Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            bgImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            bgImg={cryptoImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Netflix"
            bgImg={netflixImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Property Finder"
            bgImg={twitchImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
