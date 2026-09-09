import MainPage from "./pages/MainPage.jsx";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Project from "./pages/Project.jsx";
import Education from "./pages/Education.jsx";

import workExperiences from "./data/workExperiences.js";
import volExperiences from "./data/volExperiences.js";
import projects from "./data/projects.js";
import hackathonProjects from "./data/hackathonProjects.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const navs = [
    { path: '/home', label: 'Home', sections: [
        {
            label: 'About'
        }
        ]
    },
    { path: '/experience', label: 'Experience', sections: [
        { label: 'Work Experience', sections: workExperiences.map((e) => ({ label: e.label })) },
        { label: 'Volunteering', sections: volExperiences.map((e) => ({ label: e.label })) },
        ]
    },
    { path: '/projects', label: 'Projects', sections: [
        { label: 'Projects', sections: projects.map((p) => ({ label: p.label })) },
        { label: 'Hackathons', sections: hackathonProjects.map((p) => ({ label: p.label })) },
        ]
    },
    { path: '/education', label: 'Education', sections: [
            {label:'Education'},
            {label:'Awards'}
        ]},
    { path: '/skills', label: 'Skills' },
]

export default function App() {
   return (
       <BrowserRouter>
           <Routes>
               <Route path='/' element={ <MainPage navs={navs}/> } />
               <Route path='/home' element={ <Home navs={navs}/> } />
               <Route path='/experience' element={ <Experience navs={navs}/> } />
               <Route path='/projects' element={ <Project navs={navs}/> } />
               <Route path='/education' element={ <Education navs={navs}/> } />
           </Routes>
       </BrowserRouter>)
}
