
import educationpic from "../../../../public/education.jpg";
import certificate from "../../../../public/certificate_Sharuk.jpg";
import experience from "../../../../public/certificate_experience.jpg";
import degree from "../../../../public/certificate_degree.jpg";
import workpic from "../../../../public/work.jpg";
export const resumeDetails=[
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
          summary:"As a Full Stack Developer Intern, I gained hands-on experience with the MERN stack and actively participated in the development lifecycle of web applications.Assisted in building and deploying features using MongoDB, Express.js, React.js, and Node.js, under the guidance of senior developers.Collaborated effectively within a team environment, contributing to discussions, sharing insights, and problem-solving to meet project objectives.Demonstrated a proactive attitude towards learning, regularly engaging in self-study and training to deepen understanding of MERN technologies and best practices in software development."
        },
      ],
    },
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
          summary:""
        },
        {
          img: educationpic,
          year: " 2023 - 2024",
          course: "MERN STACK WEB DEVELOPMENT",
          university: "REX CODERS ACADEMY",
          collage: "",
          file: certificate,
          summary:"",
        },
      ],
    },
    
  ];