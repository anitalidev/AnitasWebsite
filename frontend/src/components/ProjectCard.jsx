export default function ProjectCard({ title, description, tags, githubLink, featured,  date}) {
    const shortDesc = Array.isArray(description) ? description[0] : description;
    return (
        <li className='project'>
            <div className='project-preview' />
            <div className='project-body'>
                <h3>{title}</h3>
                <p className='project-date'>{date }</p>
                <p className='project-desc'>{ shortDesc }</p>
                <div className='project-skills'>
                    {tags.map((tag) => <span key={ tag }>{tag}</span>)}
                </div>
                {githubLink && (
                    <div className='project-links'>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github" /> CODE
                        </a>
                    </div>
                )}
            </div>
        </li>
    )
}
