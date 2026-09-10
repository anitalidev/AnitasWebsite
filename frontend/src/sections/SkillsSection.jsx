import { useState, useRef } from 'react'
import rawSkills from '../data/skills.js'
import Section from '../components/Section.jsx'

const CATEGORY_ORDER = ['frontend', 'backend', 'programming', 'database', 'libraries', 'tools']

export default function SkillsSection({ skills = rawSkills }) {
    const [active, setActive] = useState('all')
    const [gridKey, setGridKey] = useState(0)
    const baseDelay = useRef(0.2)

    const presentCategories = CATEGORY_ORDER.filter(cat => skills.some(s => s.category === cat))
    const filtered = active === 'all' ? skills : skills.filter(s => s.category === active)

    function switchTab(cat) {
        baseDelay.current = 0.1
        setActive(cat)
        setGridKey(k => k + 1)
    }

    return (
        <Section>
            <h2> Skills </h2>
            <div className='skills-filter'>
                <button
                    className={`skills-tab${active === 'all' ? ' skills-tab--active' : ''}`}
                    onClick={() => switchTab('all')}
                >
                    ALL <span className='skills-tab-count'>{skills.length}</span>
                </button>
                {presentCategories.map(cat => (
                    <button
                        key={cat}
                        className={`skills-tab${active === cat ? ' skills-tab--active' : ''}`}
                        onClick={() => switchTab(cat)}
                    >
                        {cat.toUpperCase()}{' '}
                        <span className='skills-tab-count'>
                            {skills.filter(s => s.category === cat).length}
                        </span>
                    </button>
                ))}
            </div>
            <div key={gridKey} className='skills-grid'>
                {filtered.map((skill, i) => {
                    const col = i % 4
                    const row = Math.floor(i / 4)
                    return (
                        <div
                            key={skill.name}
                            className='skill-card'
                            style={{ '--skill-delay': `${baseDelay.current + (col + row) * 0.06}s` }}
                        >
                            <i className={`${skill.icon} skill-card-icon`} />
                            <span className='skill-card-name'>{skill.name}</span>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
