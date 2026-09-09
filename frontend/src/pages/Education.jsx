import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../sections/Footer.jsx";
import TitleCard from "../components/TitleCard.jsx";
import EducationSection from "../sections/EducationSection.jsx";

export default function Education({ navs }) {
    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI'/>
            <div className='main-content'>
                <TitleCard title='Anita Li' description='My academic journey at UBC, including coursework, achievements, and awards.' />
                <EducationSection id='eduAndAwards' title='Education and Awards' />
            </div>
            <Footer />
        </>
    )
}
