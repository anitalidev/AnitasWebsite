export default function ProjectCard({ title, description, tags, githubLink, featured, date, detail, detailLink }) {
    const shortDesc = Array.isArray(description) ? description[0] : description;
    return (
        <li className={ 'project ' + featured }>
            <div className='project-preview' />
            <div className='project-body'>
                {(featured === 'level-1' || featured === 'level-2') && <p className='project-featured-label'>FEATURED</p>}
                <h3>{title}</h3>
                <p className='project-date'>{date }</p>
                {detail && (
                    detailLink
                        ? <a className='project-detail' href={detailLink} target='_blank' rel='noopener noreferrer'>{detail}</a>
                        : <p className='project-detail'>{detail}</p>
                )}
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
