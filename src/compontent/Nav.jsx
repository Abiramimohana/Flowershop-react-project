import { Link } from "react-router-dom";

export default function Nav(){
    return(
      <>
      <header>
        
      <nav className='headersectionnav'>
         <ul className='nav1'  >
            <li><Link className="home" to='/'>HOME</Link></li>
            <li><Link className="about" to="/About">ABOUT</Link></li>
            <li><Link className="service" to="/Service">SERVICE</Link> </li>
            <li><Link className="showcasehead" to="/Showcase">SHOWCASE</Link> </li>
            <li><Link className="contactus" to="/Contact">CONTACT</Link></li>
          </ul>
       </nav> 
               
      </header>
      </>
    );
}