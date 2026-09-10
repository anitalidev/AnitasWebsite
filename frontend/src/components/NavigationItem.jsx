import { useNavigate } from "react-router-dom";

export default function NavigationItem({ selected, path, label, sections }) {
    const navigate = useNavigate();
    return (
        <div className='nav-item'>
            <a className={selected ? 'selected' : undefined} onClick={() => navigate(path)}>{label}</a>
            <div className='nav-dropdown'>
                {sections?.map((section) => {
                    return (
                        <div className='nav-dropdown-item' key={section.label}>
                            <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>{section.label}</span>
                                {section.sections?.length > 0 && <span>▶</span>}
                            </a>
                            {
                                !(section.sections?.length > 0) ? undefined :
                                    <>
                                    <div className='nav-subdropdown'>
                                        {section.sections.map((subsection) => {return (
                                            <a key={subsection.label}> {subsection.label}</a>
                                        ) })}
                                    </div>
                                    </>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}