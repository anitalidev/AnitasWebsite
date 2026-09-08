import NavigationBar from "../components/NavigationBar.jsx";
import Experiences from "../sections/Experiences.jsx";
import workExperiences from "../data/workExperiences.js";
import volExperiences from "../data/volExperiences.js";
import Footer from "../sections/Footer.jsx";
import TitleCard from "../components/TitleCard.jsx";

export default function Experience() {
    return (
        <>
            <NavigationBar title='ANITA LI'/>
            <div className='main-content'>
                <TitleCard title='Anita Li' description='UBC Computer Science student and aspiring developer focused on clean design and problem solving.' />
                <Experiences id='wexperience' title='Work Experience' experiences={workExperiences}/>
                <Experiences id='vexperience' title='Volunteer Experience' experiences={volExperiences}/>
            </div>
            <Footer />
        </>
    )
}