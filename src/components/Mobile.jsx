import React from "react";
export const Mobile=({url,title,price,category,btn,btnsub})=>{
    return(
        <div className="sub">
            <img src={`img/${url}.jpg`}alt=""/>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <p>{category}</p>
            <button className="btn1">{btn}</button>
            <button className="btn2">{btnsub}</button>
        </div>
    )
}