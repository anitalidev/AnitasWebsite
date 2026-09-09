import { useState } from 'react'
import NavigationBar from '../components/NavigationBar.jsx'
import TitleCard from '../components/TitleCard.jsx'
import Footer from '../sections/Footer.jsx'
import skills from '../data/skills.js'

const CATEGORY_ORDER = ['frontend', 'backend', 'programming', 'database', 'libraries', 'tools']

const presentCategories = CATEGORY_ORDER.filter(cat =>
    skills.some(s => s.category === cat)
)

export default function Skills({ navs }) {
    const [active, setActive] = useState('all')

    const filtered = active === 'all' ? skills : skills.filter(s => s.category === active)

    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI' />
            <div className='main-content'>
                <TitleCard title='Skills' description='Technologies and tools I have worked with.' />
                <section>
                    <div className='skills-filter'>
                        <button
                            className={`skills-tab${active === 'all' ? ' skills-tab--active' : ''}`}
                            onClick={() => setActive('all')}
                        >
                            ALL <span className='skills-tab-count'>{skills.length}</span>
                        </button>
                        {presentCategories.map(cat => (
                            <button
                                key={cat}
                                className={`skills-tab${active === cat ? ' skills-tab--active' : ''}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat.toUpperCase()}{' '}
                                <span className='skills-tab-count'>
                                    {skills.filter(s => s.category === cat).length}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className='skills-grid'>
                        {filtered.map(skill => (
                            <div key={skill.name} className='skill-card'>
                                <i className={`${skill.icon} skill-card-icon`} />
                                <span className='skill-card-name'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
