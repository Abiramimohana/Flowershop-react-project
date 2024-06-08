
import Headericon from "./Headericon";
import Nav2 from "./Nav2";
import "../css/Contact.css"


export default function Contact(){
   
    function handClick(){
    alert("YOUR MESSAGE RECIEVE....THANK YOU!!! ")
    }
    return(
        <>
        <header>
            <Headericon/>
        <div className="flowerheader">
        <span><h1 className="abouthead">Flower world</h1></span>
         <nav>
           <Nav2/>
          </nav>
        </div>
        </header>
        <section className="contactimgsection">
        <div className="contactimg"></div>
        </section>
     
        <setion className="contactsection">
            <div className="contact">
                <h3>Contacts</h3>
                <span className="address">
                <p>ADDRESS:<span > 11559 Ventura Boulevard, Studio <br/>City, CA 91604</span></p>
                <p>PHONES:<span> 123-456-7890; 123-456-7891</span> </p>
                <p>WE ARE OPEN:<span>Mn-Fr: 10 am-8 pm</span> </p>
                </span>
            </div>
            <div className="contact1">
                <h3>Let's Get in Touch</h3>
                <form action="">
                    <input type="text" placeholder="your Name*" autoComplete="off" required/><br/><br/>
                    <input type="text" placeholder="your Email*" autoComplete="off" required/><br/><br/>
                    <textarea name="address" id="" placeholder="Your Message*" autoComplete="off" required ></textarea>
                </form>
            </div>
           </setion>
           <div className="submitcontact">
            <button className="contactbtn" onClick={handClick}>Submit</button>
            </div>
        
        </>
    );
}