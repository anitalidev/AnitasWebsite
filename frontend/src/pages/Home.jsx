import NavigationBar from "../components/NavigationBar.jsx";
import about from "../data/about.js";
import projects from "../data/projects.js";
import Footer from "../sections/Footer.jsx";
import BigTitleCard from "../components/BigTitleCard.jsx";

const stats = [{ num: projects.length, label: 'Projects' }];

export default function Home({ navs }) {
    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI'/>
            <div className='main-content'>
                <BigTitleCard {...about} stats={stats} />
            </div>
            <Footer />
        </>
    )
}