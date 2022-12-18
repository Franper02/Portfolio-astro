export interface TechData {
    name: string;
    image: string;
};

export interface TechCardProps {
    title: string;
    description: string;
    techs: TechData[];
};

export interface WorkCardProps {
    title: string;
    description: string;
    image?: string;
    backgroundColor: string;
    textColor: string;
    github?: string;
    live?: string;
}