import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import { Button } from 'react-bootstrap';
import { FaMoon } from 'react-icons/fa';
import { GiBoomerangSun } from 'react-icons/gi';
import MyNav from './components/MyNav';
import Home from './components/Home';
import Profile from './components/Profile';
import SoftSkills from './components/SoftSkills';
import TechSkills from './components/TechSkills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import NotFound from './components/NotFound';


function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <BrowserRouter>
      <div className="App" data-theme={theme}>
        <Button 
          className="theme-button box-shadow mx-2" 
          onClick={switchTheme}>
              {theme === 'light' ? <FaMoon size={25}/> : <GiBoomerangSun size={25}/>}
        </Button>
        <MyNav variant={theme === 'light' ? 'dark' : 'light'}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/experience" element={<WorkExperience/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/softskills" element={<SoftSkills/>}/>
          <Route path="/techskills" element={<TechSkills/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
