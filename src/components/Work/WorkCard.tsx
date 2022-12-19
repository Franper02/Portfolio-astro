import type React from "react";
import type { WorkCardProps } from "../../types";

const WorkCard : React.FC<WorkCardProps> = (props : WorkCardProps) => {
    const {title, description, image, backgroundColor, textColor, github, live} = props;
    return(
        <article className="my-2 flex w-full rounded-md shadow-2xl border-2 py-14 font-author lg:my-8 lg:items-center lg:justify-around" style={{backgroundColor: backgroundColor}}>
            <div className="mx-auto flex w-11/12 flex-col justify-center lg:w-7/12">
                <h1 className="mb-1 text-3xl font-medium opacity-80" style={{color: textColor}}>
                    {title}
                </h1>
                <p className="text-sm font-medium leading-normal max-w-[290px] opacity-80 lg:text-md" style={{color: textColor}}>
                    {description}
                </p>
                <div className="flex items-center justify-start">
                    {github && (
                        <div className="mt-4 flex">
                            <a href={github}>
                            <svg className="mr-4" width="20px" height="20px" fill={textColor} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"/>
                            </svg>
                            </a>
                        </div>
                    )}
                    {live && (
                        <div className="mt-4 flex">
                            <a href={live}>
                                <>
                                <svg width="20" height="20" className="mr-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 488.85 488.85" fill={textColor} style={{background: "new 0 0 488.85 488.85"}} xmlSpace="preserve">
                                    <g>
                                        <path
                                        d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
                                            s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
                                            c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
                                            C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
                                            c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"/>
                                    </g>
                                </svg>

                                </>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            {image && (
                <div className="hidden h-full w-4/12 items-center justify-center lg:flex">
                    <img alt="Project image" src={image}  width="300" height="300" decoding="async" data-nimg="1" className="w-fit object-contain" loading="lazy" style={{color: "transparent"}} />
                </div>
            )}
    </article>
    )
};

export default WorkCard;