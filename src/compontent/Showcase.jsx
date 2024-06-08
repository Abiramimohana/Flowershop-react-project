import Headericon from "./Headericon";
import Nav2 from "./Nav2";
import '../css/Showcase.css';
import { Showcase1 } from '../Showcaselist/Showcase1';
import FlowerItem from './FlowerItem';
import FlowerItem1 from './FlowerItem1';
import '../css/Floweritem.css';
import { Link } from "react-router-dom";
import showcaseimg from '../Assest/istockphoto2.jpg';
import { Showcase2 } from "../Showcaselist/Showcase2";




export default function Showcase() {
    return (
        <>
            <header>
                <Headericon />
                <div className="flowerheader">
                    <span><h1 style={{ color: " lightcoral" }} className="abouthead">Flower world</h1></span>
                    <nav>
                        <Nav2 />
                    </nav>
                </div>
            </header>
            <section className="showcaseimg">
                <div className="imgshowccase"> <img src={showcaseimg} alt=""  /></div>
                <div className="showcasetext"><strong>SHOWCASE</strong></div>
                </section>
              
            
        <div className="showcasebouquet">
        <div className="flowertitle">Bouquet List</div>
        <div className="flowerlist">
            {Showcase1.map((flowerItem,key)=>{
                return <FlowerItem 
                key={key}
                image={flowerItem.image}
                 name={flowerItem.name} 
                price={flowerItem.price}/>
            })}
        </div>
       </div>
       <Link to='/Flowerlist'><button  className="showcasebtn">View More</button></Link>

       <div className="showcase">
        <div className="flowertitle1">Event List</div>
        <div className="flowerlist">
            {Showcase2.map((flowerItem1,key)=>{
                return <FlowerItem1
                key={key}
                image={flowerItem1.image}
                 name={flowerItem1.name} 
                price={flowerItem1.price}/>
            })}
        </div>
       </div>
      <Link to='/Flowerlist1'><button className="showcasebtn">view More</button></Link>
          
          {/* showcase footer */}
          
        </>
    );
}