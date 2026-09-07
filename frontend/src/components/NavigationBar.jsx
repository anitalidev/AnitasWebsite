import NavigationItem from "./NavigationItem.jsx";

export default function NavigationBar({ title, navs }) {
    return (
        <div className='navbar-wrapper'>
            <nav className='navbar'>
                <span className='navbar-name'> { title } </span>
                <NavigationItem {...navs['about']}/>
                <NavigationItem {...navs['experience']}/>
                <NavigationItem {...navs['projects']}/>
                <NavigationItem {...navs['eduAndAwards']}/>
                <NavigationItem {...navs['skills']}/>
            </nav>
        </div>
    )
}
