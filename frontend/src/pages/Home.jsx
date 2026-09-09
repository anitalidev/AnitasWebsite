import NavigationBar from "../components/NavigationBar.jsx";
import about from "../data/about.js";
import projects from "../data/projects.js";
import Footer from "../sections/Footer.jsx";
import BigTitleCard from "../sections/BigTitleCard.jsx";
import SelectedProjects from "../sections/SelectedProjects.jsx";

const stats = [{ num: projects.length, label: 'Projects' }];

function selectFeatured(project) {
    return project.featured !== 'normal'
}

export default function Home({ navs }) {
    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI'/>
            <div className='main-content'>
                <BigTitleCard {...about} stats={stats} />
                <SelectedProjects projects={projects} selector={selectFeatured} />
            </div>
            <Footer />
        </>
    )
}