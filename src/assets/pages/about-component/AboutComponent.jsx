import React from "react";
import { Card, Button } from "flowbite-react";
import resume from "../../../../public/Sharukhan -Resume.pdf";
import aboutpic from "../../../../public/profile-img.png.png";

function AboutComponent() {
  return (
    <main className=" flex justify-center align-middle " id="about">
      <section className=" container bg-green-100  dark:bg-black">
        <Card className="grid justify-center  bg-green-50 dark:shadow-white shadow-slate-900  ">
          <p className=" tracking-[0.5em]  pb-6 gap-1 text-center">ABOUT</p>
          <div className="grid lg:grid-flow-col lg:grid-cols-2 md:gap-4">
            <div className=" rounded  relative w-full h-full ">
              <img
                src={aboutpic}
                alt="Aboutpic"
                className="lg:absolute  w-full h-full object-cover rounded  "
              />
            </div>
            <div className="grid items-center justify-center content-evenly rounded gap-y-5  md:gap-8 py-8 px-3 lg:p-3 text-wrap dark:shadow-white shadow-slate-900 border-2 lg:gap-y-12 ">
              <h2 className="text-3xl md:text-4xl text-green-700 font-bold googlefont shadow-slate-600 text-center dark:text-green-500 hover:animate-bounce  pt-9">
                About Me
              </h2>
              <div className="text-center ">
                <p className=" lg:text-2xl font-thin text-slate-600  text-balance  dark:text-white hover:dark:text-green-200 hover:text-green-700">
                  Enthusiastic MERN Stack Developer with a passion for crafting
                  dynamic web solutions. Possessing a solid grasp of MongoDB,
                  Express.js, React.js, and Node.js, I bring strong
                  problem-solving skills and a collaborative spirit to every
                  project. Eager to contribute to innovative initiatives while
                  further honing expertise in web development
                </p>
              </div>
              <div className="flex justify-center">
                <ul className="flex flex-col sm:justify-center gap-6 xl:text-2xl md:p-2 lg:gap-y-12 ">
                  <li className="flex gap-3">
                    <span className=" font-semibold flex justify-between sm:w-40 dark:text-white ">
                      Name <span className=" text-end">:</span>
                    </span>
                    <span className="hover:text-green-500 dark:text-white  hover:dark:text-green-200 ">
                      {" "}
                      Mohamed Sharukhan M
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 flex justify-between dark:text-white">
                      Date of birth <span>:</span>
                    </span>
                    <span className="hover:text-green-500 dark:text-white  hover:dark:text-green-200">
                      {" "}
                      19/03/1995
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 flex justify-between dark:text-white">
                      Address <span>:</span>
                    </span>
                    <span className="hover:text-green-500 dark:text-white  hover:dark:text-green-200">
                      Tamilnadu,INDIA
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 flex justify-between dark:text-white">
                      Zip code <span>:</span>
                    </span>
                    <span className="hover:text-green-500 dark:text-white  hover:dark:text-green-200">
                      {" "}
                      629174
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 text-nowrap flex justify-between dark:text-white">
                      Email <span>:</span>
                    </span>
                    <span className="  hover:text-green-500 dark:text-white  hover:dark:text-green-200">
                      <a
                        href="mailto:mohamedsharukhan@gmail.com"
                        target="_blank"
                      >
                        mohamedsharukhan@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" font-semibold sm:w-40 flex justify-between dark:text-white">
                      Phone <span>:</span>
                    </span>
                    <span className="hover:text-green-500 dark:text-white  hover:dark:text-green-200">
                      <a href="tel:+918220095803">+918220095803</a>
                    </span>
                  </li>
                  <li className="flex justify-center">
                    <a href={resume} target="_blank dawnload">
                      {" "}
                      <Button
                        className="w-fit"
                        gradientDuoTone="greenToBlue"
                        size="lg"
                        target="_blank"
                      >
                        Download CV
                      </Button>
                    </a>
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
