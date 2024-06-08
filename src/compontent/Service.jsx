import Headericon from "./Headericon";
import '../css/Service.css';
import Nav2 from "./Nav2";
import { Link } from "react-router-dom";
import serviceimage from '../Assest/service2.jpg'
export default function Service(){
    return(
        <>
        <header>
        <Headericon/>
        </header>
        <div className="flowerheader">
        <span><h1 style={{color:" lightcoral"}} className="abouthead">Flower world</h1></span>
       <nav>
        <Nav2/>
       </nav>
    </div>
    <section className="serviceimg">
       <div className="serviceimage">
        <img src={serviceimage} alt="sectionserviceimage" />
        </div> 
       <div className="serviceimagetext">
        <h1 className="serviceheadingtext">FLORISTIC SERVICES</h1>
        <p className="serviceparatext">Regardless of whether you need a bouquet for xmas or valentines, we'll help you pick it!</p>
        </div>
       </section>
       <section className="serviceimege1">
        <div className="serviceimg1">
        <div className="events">
          <div className="events1">
             <h2>EVENTS</h2>
          <p>Flowers can be a great addition and a decoration to an event of any scale or occasion.</p></div>
         
        </div>
        <div className="delivery">
          <div className="delivery2">
          <h2>DELIVERY</h2>
          <p>Do you live in a remote part of the state or simply want your bouquet to arrive at your doorstep</p>
          </div>
         </div>
        </div>
        <div className="serviceimg2">
        <div className="interior">
          <div className="interior2">
            <h2>INTERIOR FLORIST</h2>
            <p>Just try our team of decorators and florists with a task of making your indoors look more lovely!</p>
          </div>
        </div>
        <div className="exterior">
          <div className="exterior2">
            <h2>EXTERIOR FLORIST</h2>
            <p>With years of experience we will bring a blooming experience to your garden or a house!</p>
          </div>
        </div>
        </div>
        <div className="serviceimg3">
        <div className="hospitality">
          <div className="hospitality2">
            <h2>HOSPITALITY</h2>
            <p>Flowers can be a great addition and a decoration to an event of any scale or occasion.</p>
          </div>
        </div>
        <div className="bouquets">
          <div className="bouquets2">
            <h2>BOUQUETS</h2>
            <p>With flowers in our range, you can always arrange a wide variety of their combinations.</p>
          </div>
        </div>
        </div>
        
       </section>
       <section className="servicetext">
        <div className="servicetext1">
        <p>
        WHATEVER THE OCCASION, WE'LL FIND A BOUQUET! LEARN MORE ABOUT <br/>SERVICES & SEE THE SHOWCASE</p>
        <Link to='/Contact'><button className="servicebtn">contact</button></Link>
        </div>
      
       </section>
      
        </>
    );
}