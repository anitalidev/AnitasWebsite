export default function ExperienceCard({ label, title, type, date, description, tags }) {
    const lines = Array.isArray(description) ? description : [description];
    return (
        <li className='experience'>
            <div className='experience-logo'>
            </div>
            <div className='experience-content'>
                <div className='experience-header'>
                    <div>
                        <h3 className='experience-title'>{title}</h3>
                        {type && <span className='experience-meta'>{type}</span>}
                    </div>
                    {date && <span className='experience-date'>{date}</span>}
                </div>
                <div className='experience-desc'>
                    {lines.map((line, i) => <p key={i}>{line}</p>)}
                </div>
                {tags?.length > 0 && (
                    <div className='experience-skills'>
                        {tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                )}
            </div>
        </li>
    )
}
