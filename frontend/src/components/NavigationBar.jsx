import NavigationItem from "./NavigationItem.jsx";

export default function NavigationBar({ navs }) {
    return (
        <div className='navbar-wrapper'>
            <nav className='navbar'>
                <NavigationItem {...navs['about']}/>
                <NavigationItem {...navs['experience']}/>
                <NavigationItem {...navs['projects']}/>
                <NavigationItem {...navs['eduAndAwards']}/>
                <NavigationItem {...navs['skills']}/>
            </nav>
        </div>
    )
}
