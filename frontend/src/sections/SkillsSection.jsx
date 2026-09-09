import { useState } from 'react'
import skills from '../data/skills.js'

const CATEGORY_ORDER = ['frontend', 'backend', 'programming', 'database', 'libraries', 'tools']

const presentCategories = CATEGORY_ORDER.filter(cat =>
    skills.some(s => s.category === cat)
)

export default function SkillsSection() {
    const [active, setActive] = useState('all')
    const filtered = active === 'all' ? skills : skills.filter(s => s.category === active)

    return (
        <section>
            <h2> Skills </h2>
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
    )
}
