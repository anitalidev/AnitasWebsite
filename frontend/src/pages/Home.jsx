import NavigationBar from "../components/NavigationBar.jsx";
import TitleCard from "../components/TitleCard.jsx";
import About from "../sections/About.jsx";
import about from "../data/about.js";
import Footer from "../sections/Footer.jsx";

export default function Home({ navs }) {
    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI'/>
            <div className='main-content'>
                <TitleCard title='Anita Li' description='UBC Computer Science student and aspiring developer focused on clean design and problem solving.' />
                <About id='about' title='About Me' content={about} />
            </div>
            <Footer />
        </>
)
}