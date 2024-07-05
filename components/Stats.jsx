"use client";

import CountUp from "react-countup";

const stats = [
    {
    num: 3,
    text:"Années d'Experiences",
},
    {
    num: 20,
    text:"Projets Achevés",
},
    {
    num: 8,
    text:"Technologies Maitrisées",
},
    {
    num: 500,
    text:"Commits des Codes",
},
]

export const Stats = () => {
  return (
      <section className="pt-4 pb-12 lg:pt-0 lg:pb">
          <div className="container mx-auto">
              <div className="flex flex-wrap  gap-6 max-w-[70vw] max-auto lg:max-w-none">
                  {stats.map((item, index) => {
                      return (
                          <div className="flex-1 flex gap-4 items-center justify-center lg:justify-start"
                          key={index}>
                          <CountUp
                              end={item.num}
                              duration={5}
                              delay={2}
                                  className="text-4xl font-bold lg:text-6xl lg:font-extrabold text-white" />
                              <p className={`${item.text.length <15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 text-center lg:text-start`}>{item.text}</p>

                          </div>)
                  })}
              </div>
              
          </div>
      </section>
  )
}
