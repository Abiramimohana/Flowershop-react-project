import '../css/About.css';

import Headericon from "./Headericon";

import Nav2 from './Nav2';


export default function About() {
  return (
    <>
      <header>
        <Headericon />
        <div className="flowerheader">
        <span><h1 style={{color:" lightcoral"}} className="abouthead">Flower world</h1></span>
         <nav>
           <Nav2/>
          </nav>
</div>
</header>
<div className="aboutimage">
 
</div>
<section className='aboutdetails'>
  <p>Founded 45 years ago by a married couple of hobbyist florists from Florida, over the years this thing grew into one of the biggest flower shops in the local area.</p>
  <p>
With so many years of experience in taking care of, picking and arranging this many types of flowers into bouquets Nancy & John were bound for success.</p>
  <p>
All in all, what has started as a 2-people company, now boasts thousands of types of flowers in stock, own flower greenhouses and hundreds of hardworking and highly aesthetic employees helping our customers.</p>
</section>

    </>
  );
}