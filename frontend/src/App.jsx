import MainPage from "./pages/MainPage.jsx";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Project from "./pages/Project.jsx";
import Education from "./pages/Education.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
   return (
       <BrowserRouter>
           <Routes>
               <Route path='/' element={ <MainPage /> } />
               <Route path='/home' element={ <Home /> } />
               <Route path='/experience' element={ <Experience /> } />
               <Route path='/projects' element={ <Project /> } />
               <Route path='/education' element={ <Education /> } />
           </Routes>
       </BrowserRouter>)
}
