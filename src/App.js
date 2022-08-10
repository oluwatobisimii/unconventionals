
import './App.css';
// import Hero from './components/Hero';
// import NavBar from './components/NavBar';
// import Quote from './components/Quote';
// import Sections from './components/Sections';
// import video from "./assets/images/video.png"
// import Quote2 from './components/Quote2';
import Footer from './components/Footer';
import SaveDateBody from './components/SaveDateBody';
import SaveHero from './components/SaveHero';

function App() {
  return (
    <div className="App bg-[#FCF9F7] md:h-screen lg:h-auto space-y-10 md:space-y-16 lg:space-y-20 text-[#2B1105] w-screen overflow-x-hidden">
      {/* <Hero/>
      <NavBar/>
      <Quote/>
      <Sections/>
      <img src={video} alt="" className="my-20"/>
      <Quote2/> */}
      <SaveHero/>
      <SaveDateBody/>
      <Footer/>
    </div>
  );
}

export default App;
