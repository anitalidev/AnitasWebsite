import NavigationItem from "./NavigationItem.jsx";
import {useState} from "react";

export default function NavigationBar({ title, navs }) {
    const [ selected, setSelected ] = useState(navs['about'].label);

    return (
        <div className='navbar-wrapper'>
            <nav className='navbar'>
                <span className='navbar-name'> { title } </span>
                <NavigationItem selected = {selected} setSelected={setSelected} {...navs['about']}/>
                <NavigationItem selected = {selected} setSelected={setSelected} {...navs['experience']}/>
                <NavigationItem selected = {selected} setSelected={setSelected} {...navs['projects']}/>
                <NavigationItem selected = {selected} setSelected={setSelected} {...navs['eduAndAwards']}/>
                <NavigationItem selected = {selected} setSelected={setSelected} {...navs['skills']}/>
            </nav>
        </div>
    )
}
