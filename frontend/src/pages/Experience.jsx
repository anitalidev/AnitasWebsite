import NavigationBar from "../components/NavigationBar.jsx";
import Experiences from "../sections/Experiences.jsx";
import workExperiences from "../data/workExperiences.js";
import volExperiences from "../data/volExperiences.js";
import Footer from "../sections/Footer.jsx";
import TitleCard from "../components/TitleCard.jsx";

export default function Experience({ navs }) {
    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI'/>
            <div className='main-content'>
                <TitleCard title='Experience' description='Internships, part-time roles, and volunteering — where I have put my skills to work.' />
                <Experiences id='wexperience' title='Work Experience' experiences={workExperiences}/>
                <Experiences id='vexperience' title='Volunteer Experience' experiences={volExperiences}/>
            </div>
            <Footer />
        </>
    )
}