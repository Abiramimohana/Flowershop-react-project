import { EventListimg } from "../Showcaselist/EventListimg";
import FlowerItem1 from './FlowerItem1';
import '../css/floweritem1.css';
import { Link } from "react-router-dom";
export default function Flowerlist1(){
    return(
        <>
         <div className="showcase1">
            <div className="flowertitle">Event</div>
            <div className="flowerlist1">
            {EventListimg.map((flowerItem1,key)=>{
                return <FlowerItem1
                key={key}
                image={flowerItem1.image}
                 name={flowerItem1.name} 
                price={flowerItem1.price}/>
                })}
            </div>
        </div>
        <Link to='/Showcase'><button className='flowerlistbtn'>Back</button></Link>
  
       
        </>
    )
}
