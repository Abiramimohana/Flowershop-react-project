import './App.css'

import { Route, Routes } from 'react-router-dom';
import Headershop from './compontent/Headershop';
import About from './compontent/About';
import Contact from './compontent/Contact';
import Service from './compontent/Service';
import Showcase from './compontent/Showcase';
import Footer from './compontent/Footer';
import Flowerlist from './compontent/Flowerlist';
import Flowerlist1 from './compontent/Flowerlist1';


function App() {
  return (
    <div className="App">
       
   <Routes>
    
    <Route path="/" element={<Headershop/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/Showcase" element={<Showcase/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Flowerlist" element={<Flowerlist/>}/>
    <Route path="/Flowerlist1" element={<Flowerlist1/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
