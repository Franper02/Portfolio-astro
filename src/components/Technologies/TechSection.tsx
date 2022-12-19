import React from "react";
import TechCard from "./TechCard";

export default function TechSection() {
    return(
        <section className="mx-auto mb-4 w-11/12 max-w-[90rem] text-center"> 
            <h1 className="text-white mb-1 text-center font-author text-3xl font-medium opacity-80 lg:text-5xl">
                Technologies
            </h1>
            <div className="mx-auto mt-10 grid max-w-[90rem] grid-cols-1 gap-4 lg:grid-cols-2">
                <TechCard 
                    title="Core"
                    description="The core technologies I utilise everyday + Typescript for type safety."
                    techs={[
                        {name: "HTML5", image: "https://img.icons8.com/color/48/000000/html-5--v1.png"},
                        {name: "CSS3", image: "https://img.icons8.com/color/48/000000/css3.png"},
                        {name: "JavaScript", image: "https://img.icons8.com/color/48/000000/javascript--v1.png"},
                        {name: "TypeScript", image: "https://img.icons8.com/color/48/000000/typescript.png"},
                    ]}
                />
                <TechCard 
                    title="Frontend"
                    description="The technologies I use when making frontend apps."
                    techs={[
                        {name: "React", image: "https://img.icons8.com/color/48/000000/react-native.png"},
                        {name: "Next.js", image: "https://img.icons8.com/color/48/nextjs.png"},
                        {name: "Tailwind CSS", image: "https://img.icons8.com/color/48/tailwindcss.png"},
                    ]}
                />
            </div>
        </section>
    )
}