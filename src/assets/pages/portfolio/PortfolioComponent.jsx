import React from "react";
import { Card } from "flowbite-react";
import { BsArrowRightCircle } from "react-icons/bs";
import { projects } from "./project";
function PortfolioComponent() {
  const project = projects;
  return (
    <main className="flex justify-center " id="portfolio">
      <section className="container bg-green-100  dark:bg-black  ">
        <Card className="bg-green-50 dark:shadow-white shadow-slate-900 flex justify-center">
          <div className="grid grid-flow-row justify-center">
            <p className="tracking-[0.5em] py-4 gap-1 text-center">PORTFOLIO</p>
            <h2 className="text-3xl md:text-4xl text-green-700 font-bold googlefont text-center pb-16 dark:text-green-500 hover:animate-bounce pt-6">
              My Portfolio
            </h2>
            <Card className="dark:shadow-white shadow-slate-900 bg-green-50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9  justify-center  ">
                {project.map((data, index) => (
                  <div key={index}>
                    <Card
                      className="max-w-sm min-w-[15rem] min-h-[20rem] dark:shadow-white shadow-slate-900 bg-green-50 border-2 hover:border-green-300 grid justify-start  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300 group      "
                      imgAlt="project img"
                      imgSrc={""}
                    >
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-green-700 hover:dark:text-green-500">
                        {data.title}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-white">
                        <span className="text-nowrap font-semibold">
                          Skills Utilized :&nbsp;
                        </span>
                        <span className="text-wrap  hover:text-green-700 hover:dark:text-green-400  ">
                          {data.skills}
                        </span>
                      </p>
                      <p
                        className="font-normal text-gray-700 dark:text-white
                      hidden group-hover:block  "
                      >
                        <span className="text-nowrap font-semibold  ">
                          Professional Summary :&nbsp;
                        </span>
                        <span className="text-wrap  hover:text-green-700 hover:dark:text-green-400 ">
                          {data.ProfessionalSummary}
                        </span>
                      </p>
                      <a
                        href={data.link}
                        target="_blank"
                        className="hover:animate-bounce w-6 h-6 text-green-700 hover:dark:text-green-400  "
                      >
                        <BsArrowRightCircle className="w-8 h-8  " />
                      </a>
                    </Card>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default PortfolioComponent;
