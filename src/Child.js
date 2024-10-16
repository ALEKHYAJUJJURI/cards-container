//import React from "react"

function Child(props){
    return(
       
       <div className="card">
        <div className="card-header">
        <img src={props.imgg} alt=""/>
         <img src={props.img1} alt=""/>
         <img src={props.img2} alt=""/>
        </div>
        <div className="card-body">
        <h2 className="text-danger">{props.movie} {props.ma} {props.nam}</h2>
        </div>
        <div className="card-footer">
            <a href="#" >see more<span className="bi bi-arrow-right"></span></a>
        </div>
       </div>
    )
}
export default Child