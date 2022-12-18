import React from "react";
import WorkCard from "./WorkCard";
import MakeAHabitLogo from "../../images/makeahabit-logo.svg";
import CryptoWallets from "../../images/cryptowallets-logo.svg";
import Recorcholis from "../../images/recorcholis-logo.png";
import Letstradecards from "../../images/letstradecards-logo.jpg";
import Audivio from "../../images/Audivio-logo.svg";
import AutoFlow from "../../images/autoflow-logo.svg";

const WorkSection = () => {
    return(
        <section className="mx-auto mt-12 flex w-11/12 max-w-[90rem] flex-col py-8 font-author">
                <h1 className="text-white mb-1 text-center font-author text-3xl font-medium opacity-80 dark:opacity-100 lg:text-4xl">
                    Work
                </h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <WorkCard
                    title="AutoFlow"
                    description="I currently work as a Front-end developer in AutoFlow, a Saas company that offers a platform to car dealerships with different tools for the customer relationship management, i work in a team of 4 developers, we use React, Next.js, Tailwind CSS, and Typescript to build the frontend of the platform, itegrating a Django backend through GraphQL queries and mutations."
                    image={AutoFlow}
                    backgroundColor="#3FC5C5"
                    textColor="#fff"
                />
                <WorkCard
                    title="Make a Habit"
                    description="This is a new version of my final cs50 project, it is a webapp that allows to create an account and keep track of habits that the user wants to build, the user can create any task and register every day that he do the task."
                    image={MakeAHabitLogo}
                    backgroundColor="#275fff"
                    textColor="#fff"
                    github="https://github.com/Franper02/MakeAHabit-React"
                    live="live.com"
                />
                <WorkCard
                    title="Crypto Wallets"
                    description="This is a project that i worked on for a client in upwork, it's a website that displays 9 different crypto wallets with a very specific style and with a search bar to filter those wallets."
                    image={CryptoWallets}
                    backgroundColor="#FFC440"
                    textColor="#fff"
                    github="https://github.com/Franper02/Upwork-wallets"
                    live="https://crypto-wallets.000webhostapp.com/"
                />
                <WorkCard
                    title="Recorcholis"
                    description="This is a project that i worked on for a Gama Development as a Freelancer, Recorcholis is a big business of mexico, they offer entertainment services for kids and adolescents, i worked in a couple front-end tasks and completed them all sucessfully"
                    image={Recorcholis}
                    backgroundColor="#D54100"
                    textColor="#fff"
                    live="https://www.recorcholis.com.mx/"
                />
                <WorkCard
                    title="Let's trade cards"
                    description="This is a project that i worked on for a client in upwork, it's a website where you can buy and sell sport cards to anyone in the US, i updated some parts of the Front-end in the website according to the client's request."
                    image={Letstradecards}
                    backgroundColor="#fff"
                    textColor="#111"
                    live="https://letstradecards.com/"
                />
                <WorkCard
                    title="Audiv.io"
                    description="This is a project that i worked on for a client on Upwork, it's a tool to automatically get twitch stream highlights and statistics, i worked in a couple of front-end taks, all the clients requests were completed sucessfuly and i got hired again to keep making changes on his page."
                    image={Audivio}
                    backgroundColor="#f7def0"
                    textColor="#111"
                    live="https://app.audiv.io/"
                />
            </div>
        </section>
    )
};

export default WorkSection;