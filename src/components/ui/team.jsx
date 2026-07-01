import React from 'react';
import { TEAM_MEMBERS } from '../../data/siteData';

export default function TeamSection() {
  return (
    <section className="bg-surface py-16 md:py-32 dark:bg-transparent font-google-sans">
      <div className="mx-auto max-w-5xl border-t border-outline/20 px-6 pt-12">
        <span className="font-google-sans text-sm font-semibold tracking-wider uppercase text-white -mt-16 block w-max bg-surface px-6 dark:bg-gray-950">
          Our Team
        </span>
        <div className="mt-12 gap-12 sm:grid sm:grid-cols-2 md:mt-20">
          <div className="sm:w-11/12">
            <h2 className="text-headline-lg font-bold text-on-surface">Our Dedicated Team</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-body-md text-on-surface-variant/80 leading-relaxed">
              We are a group of passionate individuals committed to empowering youth and fostering community growth. Through our programs, we strive to build a better future together.
            </p>
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container">
                  <img
                    className="h-full w-full object-cover object-center grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    src={member.avatar}
                    alt={member.name}
                    width="400"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="px-2 pt-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-headline-sm font-semibold text-on-surface transition-all duration-500 group-hover:text-primary">
                      {member.name}
                    </h3>
                    <span className="text-xs text-on-surface-variant font-mono">_0{index + 1}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between overflow-hidden h-8">
                    <span className="text-body-md text-primary font-medium translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
