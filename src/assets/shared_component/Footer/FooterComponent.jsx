import React from "react";
import { Footer, Avatar } from "flowbite-react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiIndeed } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import profilePic from "../../../../public/IMG_0312.jpg";
import { IoLocationSharp } from "react-icons/io5";

function FooterComponent() {
  return (
    <main className="flex flex-row justify-center ">
      <section className=" w-full bottom-0 z-20 ">
        <div>
          <Footer
            color="green-700 "
            className=" bg-green-100 px-3  rounded pt-4 lg:text-3xl justify-around border-2 border-green-700 shadow-slate-500  "
          >
            <div iv className="w-full">
              <div className="grid w-full justify-center justify-items-center items-center sm:flex sm:justify-between md:flex md:grid-cols-1 ">
                <div className="grid justify-center  gap-5">
                  <div className="flex gap-x-4 md:py-6  ">
                    <Avatar
                      className="cursor-zoom-in"
                      alt="User Profile"
                      img={profilePic}
                      rounded
                    />
                    <span className="self-center whitespace-nowrap text-green-700 dark:text-green-500 font-bold googlefont hover:animate-bounce ">
                      Mohamed Sharukhan
                    </span>
                  </div>
                  <p className="   hover:text-green-700 hover:dark:text-green-400 dark:text-gray-400 flex justify-center  align-middle content-center gap-x-4 text-wrap font-bold">
                    {" "}
                    <span>
                      <IoLocationSharp className="w-8 h-8 hover:animate-bounce"/>
                    </span>{" "}
                    <span className="text-sm">
                      8/124,Thiruvithamcode,
                      <br />
                      Kanniyakumari. <br />
                      TamilNadu,INDIA. <br /> 629174.
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-2 lg:gap-8 mt-4 sm:grid-cols-3 ">
                  <div className="">
                    <Footer.Title
                      title="about"
                      className="hover:text-green-700"
                    />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#contact" className="  hover:text-green-700 hover:dark:text-green-400">
                        Contact
                      </Footer.Link>
                      <Footer.Link href="#about" className="  hover:text-green-700 hover:dark:text-green-400">
                        About
                      </Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title
                      title="Follow us"
                      className="hover:text-green-700"
                    />
                    <Footer.LinkGroup col className="hover:text-green-700">
                      <Footer.Link
                        href="https://github.com/mohamedsharukhan?tab=repositories."
                        className="hover:text-green-700"
                      >
                        Github
                      </Footer.Link>
                      <Footer.Link
                        href="https://discord.com/users/1085804304180457492"
                        className="hover:text-green-700"
                      >
                        Discord
                      </Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                </div>
              </div>
              <Footer.Divider className=""/>
              <div className="w-full sm:flex items-center sm:justify-between  text-center pb-7 ">
                <Footer.Copyright
                  href="#"
                  by="Mohamed Sharukhan"
                  year={2024}
                  className="hover:text-green-700 pb-3 md:pb-0"
                />
                <div className=" flex space-x-6  justify-center className='hover:text-green-700'">
                  <Footer.Icon
                    href="https://profile.indeed.com/p/mohameds-4rqtsq3"
                    icon={SiIndeed}
                  />
                  <Footer.Icon
                    href="https://github.com/mohamedsharukhan?tab=repositories."
                    icon={BsGithub}
                  />
                  <Footer.Icon
                    href="https://www.linkedin.com/in/mohamed-sharukhan-756979274"
                    icon={SlSocialLinkedin}
                  />
                  <Footer.Icon
                    href="https://www.instagram.com/sha_.ru_.kh_?igsh=MmNrenljaDYycm1o"
                    icon={BsInstagram}
                  />
                  <Footer.Icon
                    href="https://x.com/MohamedSharukh4?t=ecr-Ffl5vR4_laldE7cXOw&s=09"
                    icon={BsTwitterX}
                  />
                </div>
              </div>
            </div>
          </Footer>
        </div>
      </section>
    </main>
  );
}

export default FooterComponent;
