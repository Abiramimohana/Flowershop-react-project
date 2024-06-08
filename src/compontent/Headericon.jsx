
export default function Headericon(){
    return(
        <>
        <header>
        <span className='headericon'>
                    <ul className='phoneicon'><li style={{color:"lightcoral"}}><i class="bi bi-telephone-fill"></i><span style={{fontFamily:"monospace"}}className="headerphoneicon" >  Phones: 123-456-7890; 123-456-7891</span></li></ul>

                    <ul className='fyit'>
                        <li className="facebook"><i class="bi bi-facebook"></i></li>
                        <li className="youtube"><i class="bi bi-youtube"></i></li>
                        <li className="instagram"><i class="bi bi-instagram"></i></li>
                        <li className="twitter"><i class="bi bi-twitter"></i></li>
                    </ul>
                </span>
        </header>
        </>
    );
}