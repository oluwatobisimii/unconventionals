
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Quote from './components/Quote';
import Sections from './components/Sections';
import video from "./assets/images/video.png"
import Quote2 from './components/Quote2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-[#FCF9F7] space-y-20 text-[#2B1105]">
      <Hero/>
      <NavBar/>
      <Quote/>
      <Sections/>
      <img src={video} alt="" className="my-20"/>
      <Quote2/>
      <Footer/>
    </div>
  );
}

export default App;
