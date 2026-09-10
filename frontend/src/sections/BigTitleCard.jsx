const DECO = [
    { text: '{}',      top: '8%',  left: '4%',   size: '3.5rem', opacity: 0.07, rotate: -12 },
    { text: '=>',      top: '18%', left: '82%',  size: '2.8rem', opacity: 0.08, rotate: 8  },
    { text: '()',      top: '55%', left: '6%',   size: '2.2rem', opacity: 0.07, rotate: 15  },
    { text: '&&',      top: '70%', left: '88%',  size: '2.5rem', opacity: 0.07, rotate: -6  },
    { text: '//',      top: '40%', left: '91%',  size: '2.4rem', opacity: 0.08, rotate: 0   },
    { text: 'null',    top: '80%', left: '3%',   size: '1.6rem', opacity: 0.07, rotate: -8  },
    { text: '[]',      top: '12%', left: '72%',  size: '2rem',   opacity: 0.06, rotate: 10  },
    { text: 'const',   top: '62%', left: '78%',  size: '1.5rem', opacity: 0.06, rotate: -5  },
    { text: 'return',  top: '30%', left: '3%',   size: '1.5rem', opacity: 0.06, rotate: 6   },
    { text: '</>',     top: '85%', left: '60%',  size: '2rem',   opacity: 0.07, rotate: -10 },
    { text: '∑',       top: '22%', left: '18%',  size: '3rem',   opacity: 0.05, rotate: 0   },
    { text: '01',      top: '75%', left: '45%',  size: '5rem',   opacity: 0.04, rotate: -4  },
    { text: '::',      top: '48%', left: '48%',  size: '2.2rem', opacity: 0.05, rotate: 0   },
    { text: 'import',  top: '90%', left: '20%',  size: '1.4rem', opacity: 0.06, rotate: 3   },
    { text: '∞',       top: '5%',  left: '55%',  size: '3rem',   opacity: 0.05, rotate: 0   },
    { text: 'true',    top: '38%', left: '68%',  size: '1.5rem', opacity: 0.06, rotate: -7  },
]

export default function BigTitleCard({ firstName, lastName, role, company, roles, tagline, socials, stats }) {
    const roleList = roles ?? [{ role, company }]
    return (
        <div className='btc'>
            {DECO.map((d, i) => (
                <span
                    key={i}
                    className='btc-deco'
                    style={{
                        top: d.top,
                        left: d.left,
                        fontSize: d.size,
                        opacity: d.opacity,
                        transform: `rotate(${d.rotate}deg)`,
                    }}
                >
                    {d.text}
                </span>
            ))}

            <p className='btc-hi'>HI, I'M</p>

            <h1 className='btc-name'>
                <span className='btc-first'>{firstName}</span>
                <span className='btc-last'>{lastName}</span>
            </h1>

            <div className='btc-meta'>
                <div className='btc-roles'>
                    {roleList.map(({ role, company }) => (
                        <span key={role} className='btc-role'>
                            {role} <em>at</em> <strong>{company}</strong>
                        </span>
                    ))}
                </div>

                {stats?.map(({ num, label }) => (
                    <div key={label} className='btc-stat'>
                        <span className='btc-stat-num'>{num}</span>
                        <span className='btc-stat-label'>{label}</span>
                    </div>
                ))}

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
            <p className='btc-hint'>SCROLL</p>
        </div>
    );
}
