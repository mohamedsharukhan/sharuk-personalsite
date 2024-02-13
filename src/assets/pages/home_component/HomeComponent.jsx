import AboutComponent from "../about-component/AboutComponent";
import ContactComponent from "../contact-component/ContactComponent";
import PortfolioComponent from "../portfolio/PortfolioComponent";
import ProfileComponent from "../profile-component/ProfileComponent";
import ResumeComponent from "../resum-component/ResumeComponent";
import SkillsComponent from "../skills-component/SkillsComponent";

function HomeComponent() {
  return (
    <main className="flex justify-center bg-gradient-to-r from-green-400 to-blue-400 bg-no-repeat">
      <section className=" container  bg-green-50 dark:text-slate-100">
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
