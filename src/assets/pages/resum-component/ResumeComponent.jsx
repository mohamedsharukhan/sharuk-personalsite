import React from "react";
import { Card, Tabs } from "flowbite-react";
import educationpic from "../../../../public/education.jpg";
import certificate from "../../../../public/certificate_Sharuk.jpg";
import experience from "../../../../public/certificate_experience.jpg";
import degree from "../../../../public/certificate_degree.jpg";
import workpic from "../../../../public/work.jpg";
import { BsArrowRightCircle } from "react-icons/bs";

function ResumeComponent() {
  const resume = [
    {
      tittle: "Education ",
      subtittle: "Education Quality",
      details: [
        {
          img: educationpic,
          year: " 2013 - 2017",
          course: "BACHELOR OF COMMERCE (B.COM)",
          university: "Manonmaniam Sundaranar University",
          collage: "Noorul Islam College Of Arts And Science, Kanniyakumari",
          file: degree,
        },
        {
          img: educationpic,
          year: " 2023 - 2024",
          course: "MERN STACK WEB DEVELOPMENT",
          university: "REX CODERS ACADEMY",
          collage: "",
          file: certificate,
        },
      ],
    },
    {
      tittle: "Experience",
      subtittle: "Job Experience",
      details: [
        {
          img: workpic,
          year: " July 2023 - December 2023",
          role: "FULLSTACK DEVELOPER - INTERN ",
          company: "REXKNAR CREATIVE SOLUTIONS. ",
          place: "Nagercoil.",
          file: experience,
        },
      ],
    },
  ];

  return (
    <main className="flex justify-center " id="resume">
      <section className="container bg-green-50">
        <Card className="bg-green-50 shadow-white gap-y-6 ">
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
                          className=" shadow-white gap-y-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300 "
                          imgSrc={detail.img}
                          horizontal
                        >
                          <p className=" font-semibold text-gray-700 dark:text-gray-400 flex text-wrap hover:text-green-400">
                            {detail.year}
                          </p>
                          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-green-700">
                            {detail.course || detail.role}
                          </h5>
                          <p className="font-normal text-gray-700 dark:text-gray-400 flex p">
                            <span className="text-wrap hover:text-green-400">
                              {detail.university || detail.company}
                            </span>
                          </p>
                          <p className="font-normal text-gray-700 dark:text-gray-400 flex text-wrap">
                            <span className="text-wrap hover:text-green-400">
                              {detail.collage || detail.place}
                            </span>
                          </p>

                          <BsArrowRightCircle
                            className="hover:animate-bounce w-6 h-6 text-green-700 hover:text-green-900"
                            onClick={() => {
                              window.location.href = detail.file;
                            }}
                          />
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
