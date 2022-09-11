
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import OurStory from './views/OurStory';
import AboutUs from './views/AboutUs';
import ScrollToTop from './components/ScrollTop';
import Welcome from './views/Welcome';

function App() {
  return (
    <>
    
    <ScrollToTop/>
    <Routes>
    <Route path="/" element={<Welcome/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/our-story" element={<OurStory/>}/>

    </Routes>
    </>
   
  );
}

export default App;
