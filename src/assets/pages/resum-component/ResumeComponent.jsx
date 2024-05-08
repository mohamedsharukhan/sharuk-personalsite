import React from "react";
import { Card, Tabs } from "flowbite-react";
import { BsArrowRightCircle } from "react-icons/bs";
import { resumeDetails } from "./resume";
function ResumeComponent() {
  const resume = resumeDetails;

  return (
    <main className="flex justify-center " id="resume">
      <section className="container bg-green-100  dark:bg-black ">
        <Card className="bg-green-50  gap-y-6 dark:shadow-white shadow-slate-900 ">
          <p className="tracking-[0.5em] py-4 gap-1 text-center">My Resume</p>
          <div className="">
            <Tabs
              aria-label="Pills"
              style="pills"
              className="flex justify-center gap-y-12 gap-x-5  text-2xl"
            >
              {resume.map((data, index) => (
                <Tabs.Item
                  active
                  key={index}
                  title={data.tittle}
                  gradientDuoTone="!greenToBlue"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400  ">
                    <h2 className="text-3xl md:text-4xl text-green-700 font-bold googlefont text-center pb-16 dark:text-green-500 hover:animate-bounce">
                      {data.subtittle}
                    </h2>
                    <div className="md:grid lg:flex justify-center  md:gap-16 w-full lg:h-40vh">
                      {data.details.map((detail, idx) => (
                        <Card
                          key={idx}
                          className=" dark:shadow-white shadow-slate-900 gap-y-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300 "
                          imgSrc={detail.img}
                          horizontal
                        >
                          <p className=" font-semibold text-gray-700 dark:text-gray-400 flex text-wrap hover:text-green-700 hover:dark:text-green-400">
                            {detail.year}
                          </p>
                          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-green-700 hover:dark:text-green-500">
                            {detail.course || detail.role}
                          </h5>
                          <p className="font-normal text-gray-700 dark:text-gray-400 flex ">
                            <span className="text-wrap hover:text-green-700 hover:dark:text-green-400">
                              {detail.university || detail.company}
                            </span>
                          </p>
                          <p className="font-normal text-gray-700 dark:text-gray-400 flex text-wrap">
                            <span className="text-wrap hover:text-green-700 hover:dark:text-green-400">
                              {detail.collage || detail.place}
                            </span>
                          </p>
                          <p className="font-normal text-gray-700 dark:text-gray-400 flex text-wrap">
                            <span className="text-wrap hover:text-green-700 hover:dark:text-green-400">
                              {detail.summary}
                            </span>
                          </p>
                          <a href={detail.file} target="_blank dawnload">
                          <BsArrowRightCircle
                            className="hover:animate-bounce w-8 h-8 text-green-700 hover:text-green-900 hover:dark:text-green-400"
                          />
                          </a>
                        </Card>
                      ))}
                    </div>
                  </p>
                </Tabs.Item>
              ))}
            </Tabs>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default ResumeComponent;
