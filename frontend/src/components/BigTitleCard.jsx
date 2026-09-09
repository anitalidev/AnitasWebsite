export default function BigTitleCard({ firstName, lastName, role, company, tagline, socials, stats }) {
    return (
        <div className='btc'>
            <p className='btc-hi'>HI, I'M</p>

            <h1 className='btc-name'>
                <span className='btc-first'>{firstName}</span>
                <span className='btc-last'>{lastName}</span>
            </h1>

            <div className='btc-meta'>
                <span className='btc-role'>
                    {role} <em>at</em> <strong>{company}</strong>
                </span>

                {stats?.map(({ num, label }) => (
                    <div key={label} className='btc-stat'>
                        <span className='btc-stat-num'>{num}</span>
                        <span className='btc-stat-label'>{label}</span>
                    </div>
                ))}

                <div className='btc-meta-spacer' />

                {socials?.length > 0 && (
                    <div className='btc-connect'>
                        {socials.map(({ href, icon, label }) => (
                            <a key={label} href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
                                <i className={icon} />
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <p className='btc-tagline'>{tagline}</p>
        </div>
    );
}
