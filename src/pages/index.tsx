import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import MySkill from "../components/Skill";
import Project from "../components/Project";
import Penghargaan from "../components/Penghargaan";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>

      <Navbar/>

      <Profile/>

      <MySkill/>

      <Project/>

      <Penghargaan/>

      <Contact/>

      <Footer/>
      
    </div>
  );
}
