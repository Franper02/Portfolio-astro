import React from 'react';
import { Character } from './Character';
export default function Hero() {
  return (
    <div className="relative">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="flex flex-col text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Hi! i'm Fran</span>
              <span className="block text-indigo-600 xl:inline">Front-end Developer</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            I'm a web developer based in Argentina, currently working full-time as a front-end developer and studying Computer Science at Universidad Nacional Del Comahue.
            </p>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <Character />
        </div>
      </main>
    </div>
  )
}
