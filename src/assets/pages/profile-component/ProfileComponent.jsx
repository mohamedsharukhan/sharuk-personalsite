import { Card } from "flowbite-react";
import React from "react";
import profilePic from "../../../../public/IMG_0312.jpg";

import { useState, useEffect } from "react";
import IconsComponent from "../../shared_component/icons-socialmedia/IconsComponent";
function ProfileComponent() {
  const [typedString, setTypedString] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = "Web Developer.";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((Index) => (Index + 1) % words.length);
      if (typedString !== words) {
        setTypedString(
          (prevTypedString) => prevTypedString + words[currentWordIndex]
        );
      } else {
        setTypedString("");
        setCurrentWordIndex(0);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [typedString, words, currentWordIndex]);
  return (
    <main className=" flex  justify-center ">
      <section className=" container bg-green-100  dark:bg-black">
        <Card className=" bg-green-50 mt-[76px] dark:shadow-white shadow-slate-900">
          <div className="grid lg:grid-flow-col lg:grid-cols-2 gap-3">
            <div className=" rounded  grid content-center gap-12 text-center grig justify-center  items-center  h-[83vh] dark:shadow-white shadow-slate-900  border-2 ">
              <p className=" tracking-[0.5em]  p-3 gap-1 ">
                WELCOME TO MY WORLD
              </p>
              <div className="py-3">
                <h3 className="font-bold text-2xl md:text-4xl h-24 dark:text-white  py-4 lg:p-0 hover:skew-x-12 hover:scale-110">
                  Hi, I’m <br className="lg:hidden" />
                  <span className="text-green-500 font-bold googlefont shadow-white  ">
                    Mohamed Sharukhan
                  </span>
                  <div className="relative lg:pt-6">
                    <span className="text-green-700 dark:text-green-500 absolute lg:start-16 xl:start-[22%]">
                      a
                    </span>
                    <br className="lg:hidden" />
                    <span className=" font-bold border-e-[6px] dark:text-white   border-green-700 dark:border-green-500">
                      {" "}
                      {typedString}
                    </span>
                  </div>
                </h3>
              </div>
              <p className=" md:text-2xl text-gray-500 dark:text-gray-100 p-6">
                I Can give your business a new Creative start right away!
              </p>
              <div>
                <ul>
                  <li>
                    <IconsComponent />
                  </li>
                </ul>
              </div>
            </div>

            <div className=" rounded  relative w-full h-full">
              <img
                src={profilePic}
                alt=""
                className="rounded lg:absolute  w-full h-full object-cover "
              />
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default ProfileComponent;
