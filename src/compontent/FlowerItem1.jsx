function FlowerItem1({image,name,price}){
    return(
        <div className="floweritem1">
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>${price}</p>
        </div>
    )
}
export default FlowerItem1;