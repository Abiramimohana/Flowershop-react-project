function Ourstoryitem({image}){
    return(
        <div className="ourstoryitem">
            <div style={{backgroundImage:`url(${image})`}}></div>
        </div>
    )
}
export default Ourstoryitem;