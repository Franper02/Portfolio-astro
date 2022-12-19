import type React from "react";
import type { TechCardProps } from "../../types";

const TechCard : React.FC<TechCardProps> = (props : TechCardProps) => {
    const {title, description, techs} = props;
    return(
        <article className="mx-auto mb-8 items-center justify-evenly rounded-lg border-2 py-8 font-author bg-white text-[#111] w-full">
            <div className="mx-auto w-11/12">
                <div className="mx-auto mb-6 w-11/12 text-center xl:w-8/12">
                    <h1 className="mb-1 text-3xl font-medium opacity-80">
                        {title}
                    </h1>
                    <h2 className="text-md font-medium leading-snug opacity-60 lg:text-lg">
                        {description}
                    </h2>
                    <div className="mx-auto mt-4 flex justify-center">
                    {techs?.map((tech, index) => {
                        return(
                        <div className="mx-auto mt-4 flex justify-center" key={index}>
                            <div className=" mx-3 flex h-[45px] w-[45px] flex-col items-center justify-center">
                                <img src={tech.image} width="50" height="50" decoding="async" data-nimg="1" className="max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px]" loading="lazy" style={{color: "transparent"}} />
                                <p className="font-medium capitalize opacity-90 text-xs lg:text-base">
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