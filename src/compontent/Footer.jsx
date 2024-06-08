import '../css/Footer.css'
export default function Footer() {
    const year=new Date();
    return (
        <>
           <footer className="footersection">
      <div className="footersection1">
        <p>Address: 4578 Marmora Road, Glasgow, D04 89GR</p>
        <p>Phones: 123-456-7890; 123-456-7891</p>
        <p>E-mail:<span style={{color:"lightcoral"}}> moonflower@demolink.org</span></p>
        <p>We are open: Mn-Fr: 10 am-8 pm</p>
        <ul className='footersection-fyit'>
                        <li><i class="bi bi-facebook"></i></li>
                        <li><i class="bi bi-youtube"></i></li>
                        <li><i class="bi bi-instagram"></i></li>
                        <li><i class="bi bi-twitter"></i></li>
                    </ul>
                    <p >CopyRight &copy;{year.getFullYear()}</p>
      </div>
     
     </footer>
      
        </>
    );
}