import { useRef } from "react";
import { About, Contact, Footer, Header, Project, Skills } from "./container";

import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Wrapper from "./components/wrapper/wrapper";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const skillsRef = useRef();
  const refArray = [homeRef, aboutRef, projectsRef, skillsRef, contactRef];
  const HomeWrap = Wrapper(Header, "home", "home", homeRef);
  const AboutWrap = Wrapper(About, "about", "about", aboutRef);
  const ProjectWrap = Wrapper(Project, "projects", "projects", projectsRef);
  const SkillsWrap = Wrapper(Skills, "skills", "skills", skillsRef);
  const ContactWrap = Wrapper(Contact, "contact", "contact", contactRef);

  return (
    <div className="App">
      <Navbar refArray={refArray} />
      <HomeWrap />
      <AboutWrap />
      <ProjectWrap />
      <SkillsWrap />
      <ContactWrap />
      <Footer />
    </div>
  );
}
export default App;
