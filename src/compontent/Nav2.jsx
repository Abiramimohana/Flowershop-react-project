import '../css/Nav2.css'
import { Link } from "react-router-dom";
export default function Nav2(){
    return(
        <>
         <nav className="nav2"> 
         <ul className='nav2nav1'>
              <li><Link className="home" to='/'>HOME</Link></li>
              <li><Link className="about" to="/About">ABOUT</Link></li>
              <li><Link className="service" to="/Service">SERVICE</Link> </li>
              <li><Link className="showcasehead" to="/Showcase">SHOWCASE</Link> </li>
              <li><Link className="contactus" to="/Contact">CONTACT</Link></li>
            </ul>
          </nav >
        </>
    );
}