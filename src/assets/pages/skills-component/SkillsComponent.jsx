import React from "react";
import { Card, Progress } from "flowbite-react";
import skillsPic from "../../../../public/skills.jpg";
import { skills } from "../skills-component/skills";
function SkillsComponent() {
  return (
    <main className=" flex  justify-center" id="skills">
      <section className=" container bg-green-50">
        <Card className=" bg-green-50">
          <p className=" tracking-[0.5em]  py-4 gap-1 text-center">SKILLS</p>
          <div className="grid lg:grid-flow-col lg:grid-cols-2 justify-center items-center align-middle gap-4 ">
            <div>
              <Card className="shadow-white bg-green-50">
                <h2 className="text-3xl md:text-4xl text-green-700 font-bold googlefont text-center pb-6 dark:text-green-500 shadow-white hover:animate-bounce pt-6">
                  Development Skills
                </h2>
                <ul>
                  {skills.map((data, index) => (
                    <li
                      key={index}
                      className="flex justify-center gap-y-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-green-300 duration-300 rounded-full"
                    >
                      <span className=" py-3 gap-4 w-[75%] ">
                        <Progress
                          progress={data.progress}
                          progressLabelPosition="inside"
                          textLabel={data.skill}
                          textLabelPosition="outside"
                          size="lg"
                          labelProgress
                          labelText
                          className="bg-gradient-to-r from-green-700 to-blue-300 text-center grid "
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            <div className="relative w-full h-full ">
              <img
                src={skillsPic}
                alt="skillsPic"
                className="lg:absolute  w-full h-full object-cover "
              />
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default SkillsComponent;
