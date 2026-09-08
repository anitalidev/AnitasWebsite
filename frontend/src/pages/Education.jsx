import About from '../sections/About.jsx'
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../sections/Footer.jsx";
import TitleCard from "../components/TitleCard.jsx";

import education from "../data/education.js";

export default function Education() {
    return (
        <>
            <NavigationBar title='ANITA LI'/>
            <div className='main-content'>
                <TitleCard title='Anita Li' description='UBC Computer Science student and aspiring developer focused on clean design and problem solving.' />
                <About id='eduAndAwards' title='Education and Awards' content={education} />
            </div>
            <Footer />
        </>
    )
}
