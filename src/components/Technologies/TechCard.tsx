import type React from "react";
import type { TechCardProps } from "../../types";

const TechCard : React.FC<TechCardProps> = (props : TechCardProps) => {
    const {title, description, techs} = props;
    return(
        <article className="mx-auto mb-8 items-center justify-evenly rounded-lg border-2 py-8 font-author dark:bg-white dark:text-[#111] w-full">
            <div className="mx-auto w-11/12">
                <div className="mx-auto mb-6 w-11/12 text-center xl:w-8/12">
                    <h1 className="mb-1 text-5xl font-medium opacity-80 py-4 lg:text-3xl lg:py-0">
                        {title}
                    </h1>
                    <h2 className="text-3xl font-medium leading-snug opacity-60 pb-4 lg:text-lg lg:pb-0">
                        {description}
                    </h2>
                    <div className="flex">
                    {techs?.map((tech, index) => {
                        return(
                        <div className="mx-auto mt-4 flex justify-center" key={index}>
                            <div className="mx-3 flex h-32 w-32 flex-col items-center justify-center lg:w-12 lg:h-12">
                                <img src={tech.image} className="w-32 h-32 lg:w-14 lg:h-14" loading="lazy" style={{color: "transparent"}} />
                                <p className="font-medium capitalize opacity-90">
                                    {tech.name}
                                </p>
                            </div>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default TechCard;