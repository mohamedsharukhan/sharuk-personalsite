import React from "react";
import { Navbar, Avatar, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import profilePic from "../../../../public/IMG_0312.jpg";
function NavbarComponent() {
  return (
    <main className="flex justify-center overflow-hidden ">
      <section className="  w-full fixed z-10">
        <div>
          <Navbar
            fluid
            rounded
            color="green-700"
            className=" bg-green-100 dark:bg-black lg:p-4 px-2 border-2 border-green-700 shadow-slate-500 lg:gap-6 gap-3 rounded pt-3 md:text-center  "
          >
            <Navbar.Brand
              as={Link}
              href=""
              className=" lg:gap-x-4 gap-x-3 lg:text-3xl "
            >
              <Avatar alt="User Profile" img={profilePic} rounded />
              <span className="self-center whitespace-nowrap text-green-700 dark:text-green-500 font-bold hover:animate-bounce">
                <span className="googlefont"> Mohamed</span>{" "}
                <br className="hidden md:block lg:hidden" />{" "}
                <span className="googlefont">Sharukhan</span>
              </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <div className="sm:flex text-left sm:items-center lg:gap-4 gap-2 text-2xl ">
              <Navbar.Collapse>
                <Navbar.Link href="/" active>
                  HOME
                </Navbar.Link>
                <Navbar.Link href="#about">ABOUT</Navbar.Link>
                <Navbar.Link href="#resume">RESUME</Navbar.Link>
                <Navbar.Link href="#skills">SKILLS</Navbar.Link>
                <Navbar.Link href="#portfolio">PORTFOLIO</Navbar.Link>
                <Navbar.Link href="#contact">CONTACT</Navbar.Link>
              </Navbar.Collapse>
              <DarkThemeToggle />
            </div>
          </Navbar>
        </div>
      </section>
    </main>
  );
}

export default NavbarComponent;
