"use client";
import Image from "next/image";

const Projects = ({ projects }) => {
  return (
    <div className="mt-[106px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
      {projects.map((project) => (
        <div key={project.id} className="">
          <div className="w-[445px] h-[489px] bg-[#FFEBDB] rounded-xl pl-7 pr-10">
            <Image src={project?.img} alt="img" width={445} height={489} />
          </div>
          <h2 className="text-xl font-normal text-primary pt-9">
            {project?.name}
          </h2>
          <h4 className="text-2xl font-bold pt-3">{project?.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default Projects;
