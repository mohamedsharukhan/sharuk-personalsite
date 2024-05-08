import AboutComponent from "../about-component/AboutComponent";
import ContactComponent from "../contact-component/ContactComponent";
import PortfolioComponent from "../portfolio/PortfolioComponent";
import ProfileComponent from "../profile-component/ProfileComponent";
import ResumeComponent from "../resum-component/ResumeComponent";
import SkillsComponent from "../skills-component/SkillsComponent";
function HomeComponent() {
  return (
    <main className="flex justify-center bg-green-100  dark:bg-black py-4 dark:text-white">
      <section className=" container  bg-green-100  dark:bg-black  grid gap-4 ">
        <ProfileComponent />
        <AboutComponent />
        <ResumeComponent />
        <SkillsComponent />
        <PortfolioComponent />
        <ContactComponent />
      </section>
    </main>
  );
}

export default HomeComponent;
