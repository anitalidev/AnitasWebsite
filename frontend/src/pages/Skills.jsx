import NavigationBar from '../components/NavigationBar.jsx'
import TitleCard from '../components/TitleCard.jsx'
import Footer from '../sections/Footer.jsx'
import SkillsSection from '../sections/SkillsSection.jsx'

export default function Skills({ navs }) {
    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI' />
            <div className='main-content'>
                <TitleCard title='Skills' description='Technologies and tools I have worked with.' />
                <SkillsSection />
            </div>
            <Footer />
        </>
    )
}
