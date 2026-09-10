export default function ProjectCard({ title, description, tags, githubLink, deployLink, featured, date, detail, detailLink, image }) {
    const shortDesc = Array.isArray(description) ? description[0] : description;
    return (
        <li className={ 'project ' + featured }>
            <div className='project-preview' style={{ backgroundImage: `url(${image ?? '/default.png'})` }} />
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
                {(githubLink || deployLink) && (
                    <div className='project-links'>
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github" /> CODE
                            </a>
                        )}
                        {deployLink && (
                            <a href={deployLink} target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-arrow-up-right-from-square" /> LIVE
                            </a>
                        )}
                    </div>
                )}
            </div>
        </li>
    )
}
