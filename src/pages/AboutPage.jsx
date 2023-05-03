import React from "react";
import Bull from "../assets/dadbod-centaur.jpg"

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const people = [
 {
    name: '@Code2Riches',
    role: '#HODLER',
    imageURL: Bull,
    githubURL: 'https://github.com/Code2Riches',
    linkedinUrl: 'https://linkedin.com/in/christianbenites',
    twitterUrl: 'https://twitter.com/Chris_Benites',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-700 pb-14 pt-20">
      <div className="mx-auto max-w-5xl pt-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="pt-8 sm:pt-0 space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-center text-zinc-800 dark:text-gray-300 sm:text-4xl">Dream Team</h2>
            <p className="text-xl text-center text-zinc-800 dark:text-gray-300">
            A serial Entreprenuer & Formula 1 Enthusiast, @Code2Riches decided to bridge the gap between attending a Formula 1 race in-person, with a virtual environment, where you can join in at every race!
            </p>
          </div>

          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-1 lg:gap-8">
            {people.map((person) => (

              <li key={person.name} className="rounded-lg bg-zinc-600 dark:bg-zinc-500 py-10 px-10 text-center xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src={person.imageURL} alt="" />
                  <div className="space-y-2 xl:flex-col xl:text-center xl:items-center xl:justify-between">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3 className="text-white hover:text-red-900"><a href={person.githubURL}>{person.name}</a></h3>
                      <p className="text-red-900">{person.role}</p>
                    </div>
                    <div className="space-y-2 text-sm font-sm leading-4 text-justify">
                      <p className="text-white text-center">{person.bio}</p>
                    </div>
                    <ul role="list" className="flex justify-center space-x-5">
                    <li>
                        <a href={person.githubURL} className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">Github</span>
                          <FaGithub className="h-5 w-5" />
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">LinkedIn</span>
                          <FaLinkedin className="h-5 w-5"/>
                        </a>
                      </li>
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">Twitter</span>
                          <FaTwitter className="h-5 w-5"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
