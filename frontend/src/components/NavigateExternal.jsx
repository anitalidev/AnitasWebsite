export default function NavigateExternal({label, href}) {
    return (
        <div className='external-link'>
            <a href={href} target='_blank' rel='noopener'>
                <button>
                    <i className='fas fa-external-link-alt'></i> <u>{label}</u>
                </button>
            </a>
        </div>
    )
}