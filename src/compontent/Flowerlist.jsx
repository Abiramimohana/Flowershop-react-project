import { Flowerlistimg } from '../Showcaselist/Flowerlistimg';
import FlowerItem from './FlowerItem';
import '../css/flowerlist.css'
import { Link } from 'react-router-dom';
export default  function Flowerlist(){
    return(
       <>
       <div className="showcase1">
        <div className="flowertitle">Bouquet</div>
        <div className="flowerlist1">
            {Flowerlistimg.map((flowerItem,key)=>{
                return <FlowerItem 
                key={key}
                image={flowerItem.image}
                 name={flowerItem.name} 
                price={flowerItem.price}/>
            })}
        </div>
       </div>
       <Link to='/Showcase'><button className='flowerlistbtn'>Back</button></Link>
       </> 
    );
}