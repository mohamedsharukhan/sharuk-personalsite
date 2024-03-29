import React from "react";
import { Card, Button } from "flowbite-react";
import resume from "../../../../public/Sharukhan -Resume.pdf";
import aboutpic from "../../../../public/profile-img.png.png";

function AboutComponent() {
  const handleDownload = () => {
    window.location.href = resume;
  };
  return (
    <main className=" flex justify-center align-middle " id="about">
      <section className=" container bg-green-50">
        <Card className="grid justify-center  bg-green-50  ">
          <p className=" tracking-[0.5em]  pb-6 gap-1 text-center">ABOUT</p>
          <div className="grid lg:grid-flow-col lg:grid-cols-2 md:gap-4">
            <div className=" rounded  relative w-full h-full ">
              <img
                src={aboutpic}
                alt="Aboutpic"
                className="lg:absolute  w-full h-full object-cover rounded  "
              />
            </div>
            <div className="grid items-center justify-center content-evenly rounded gap-y-5  md:gap-8 py-8 px-3 lg:p-3 text-wrap shadow-white border-2 lg:gap-y-12 ">
              <h2 className="text-3xl md:text-4xl text-green-700 font-bold googlefont shadow-slate-600 text-center dark:text-green-500 hover:animate-bounce  pt-9">
                About Me
              </h2>
              <p className=" lg:text-2xl font-thin text-slate-600  text-balance text-center dark:text-slate-500">
                Belief in teamwork, Initiative, Hard work, Sincerity, and the
                will to carry out the assignment in the specified time limit
              </p>
              <div className="flex justify-center">
                <ul className="flex flex-col sm:justify-center gap-6 xl:text-2xl md:p-2 lg:gap-y-12 ">
                  <li className="flex gap-3">
                    <span className=" font-semibold flex justify-between sm:w-40 dark:text-white">
                      Name <span className=" text-end">:</span>
                    </span>
                    <span className="hover:text-green-700 dark:text-gray-400">
                      {" "}
                      Mohamed Sharukhan M
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 flex justify-between dark:text-white">
                      Date of birth <span>:</span>
                    </span>
                    <span className="hover:text-green-700 dark:text-gray-400">
                      {" "}
                      19/03/1995
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 flex justify-between dark:text-white">
                      Address <span>:</span>
                    </span>
                    <span className="hover:text-green-700 dark:text-gray-400">
                      Tamilnadu,INDIA
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 flex justify-between dark:text-white">
                      Zip code <span>:</span>
                    </span>
                    <span className="hover:text-green-700 dark:text-gray-400">
                      {" "}
                      629174
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 text-nowrap flex justify-between dark:text-white">
                      Email <span>:</span>
                    </span>
                    <span className="  hover:text-green-700 dark:text-gray-400">
                      {" "}
                      mohamedsharukhan@gmail.com
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 flex justify-between dark:text-white">
                      Phone <span>:</span>
                    </span>
                    <span className="hover:text-green-700 dark:text-gray-400">
                      {" "}
                      +918220095803
                    </span>
                  </li>
                  <li className="flex justify-center">
                    <Button
                      onClick={handleDownload}
                      className="w-fit"
                      gradientDuoTone="greenToBlue"
                      size="lg"
                    >
                      Download CV
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default AboutComponent;
