import '../css/Headershop.css';
import Headericon from './Headericon';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { Ourstory } from '../Showcaselist/Ourstory';
import Ourstoryitem from './Ourstoryitem';
import headerimage from '../Assest/IMG_7815.webp';
import sectionimg1 from '../Assest/ourstory.jpg';
import sectionimg2 from '../Assest/ourstory2.jpeg';




export default function Headershop() {
    return (
        <>
            <header>
            <Headericon/>
            </header>
            <section className='section'>
                <div className="headershopsection">
            <div className='flowerstyle'><h1><span className='flower'>FLOWER</span><span className='world'> world</span></h1>
                    </div>      
                <nav>
                    <Nav/>
                </nav>
                </div>   
                
                <div className='flowerstyle1'>
                    <h1 style={{fontSize:40}}>FLOWER WORLD</h1>
                    <p style={{fontSize:20}}>Daffodils are blue, tulips are red, the Mooflower shop will<br/> help you the best!</p></div>
                    
                <div className="headerimage1">
                <img style={{ height: 600, width: 500,marginLeft:800,marginTop:-40 }} src={headerimage } alt="headerimage" />
                </div>
                
            </section>
            <div className="homebtn">
                        <Link to="/Service"> <button className="btnhome">Learn More</button> </Link>
                       
                    </div>
            <section className="section1">
             
                <div className="sectionimg1"><img src={sectionimg1} alt="sectionimg1" /></div>
                <div className="section1ourstory">
                    
                    <h6>OUT HISTORY</h6>
                    <h1>Story About Flower World</h1>
                    <p>Founded 45 years ago by a married couple<br/> of hobbyist florists from Florida, over the <br/>years this thing grew into one of the biggest<br/> flower shops in the local area.</p>
                    <p>With so many years of experience in taking<br/> care of, picking and arranging this many types<br/> of flowers into bouquets Nancy<br/> & John were bound for success.</p>
                </div>
            </section>
            <section className="section2">
            <div className="sectionimg2"><img src={sectionimg2} alt="sectionimg2" /></div>
         
                  
                <div className="section2ourstory">
                <h1>Floristic Services</h1>
                    <div className="service1">
                        <div className="serviceevent">
                        <h6>EVENTS</h6>
                        <p>Flowers can be a great<br/> addition and a decoration <br/>to an event of any scale or <br/>occasion.</p>
                        </div>
                        <div className="servicedelivery"><h6>DELIVERY</h6>
                        <p>Do you live in a remote part of <br/>the state or simply want your<br/> bouquet to arrive at your doorstep?</p>
                        </div>
                        </div>
                    <div className="service2">
                        <div className="servicein">
                        <h6>INTERIOR FLORIST</h6>
                        <p>Just try our team of<br/> decorators and florists with a<br/> task of making your indoors <br/>look more lovely!</p>
                        </div>
                        <div className="serviceex">
                        <h6>EXTERIOR FLORIST</h6>
                        <p>With years of experience we <br/>will bring a blooming <br/>experience to your garden or,<br/> a house!</p>
                        </div>
                        </div>
                    <div className="service3">
                        <div className="servicehos">
                        <h6>HOSPITALITY</h6>
                        <p>Hotels and restaurants have<br/> always been at the very top of<br/> our list of clients.</p>
                        </div>
                        <div className="servicebou">
                        <h6>BOUQUETS</h6>
                        <p>With flowers in our range, you<br/> can always arrange a wide<br/>variety of their combinations.</p>
                        </div>
                        </div>
                        </div>
            </section>
            <section className="ourgallery">
                <h1 className='ourgalleryheading'>Our Gallery</h1>
                <div className="ourgalleryimg">
                  {Ourstory.map((ourstoryitem,key)=>{
                    return<Ourstoryitem
                    key={key}
                    image={ourstoryitem.image}
                    />
                  })}
                   
                   
                
                </div>
            </section>
          
        </>
    );
}