import React from "react";
import { Card } from "flowbite-react";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";

function IconsComponent() {
  const icons = [
    {
      icon: <AiOutlineLinkedin className="md:w-7 md:h-7 " />,
      link: "https://www.linkedin.com/in/mohamed-sharukhan-756979274",
    },
    {
      icon: <SiIndeed className="md:w-7 md:h-7  " />,
      link: "https://profile.indeed.com/p/mohameds-4rqtsq3",
    },
    {
      icon: <FaSquareGithub className="md:w-7 md:h-7  " />,
      link: "https://github.com/mohamedsharukhan?tab=repositories.",
    },
    {
      icon: <TiSocialInstagram className="md:w-7 md:h-7  " />,
      link: "https://www.instagram.com/sha_.ru_.kh_?igsh=MmNrenljaDYycm1o",
    },
  ];

  return (
    <main className="" id="icon">
      <section>
        <div className="inline-block ">
          <p className=" font-semibold pb-12">FIND WITH ME</p>

          <div className="grid grid-flow-col justify-center gap-2 md:gap-6">
            {" "}
            {icons.map((data, index) => (
              <a href={data.link} target="_blank" key={index} className="">
                <Card className="hover:animate-bounce duration-300 delay-300 shadow-slate-300 shadow-lg hover:bg-green-300 hover:shadow-green-700 dark:shadow-slate-400 dark:bg-white dark:text-black inline-block ">
                  {" "}
                  {data.icon}
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default IconsComponent;
