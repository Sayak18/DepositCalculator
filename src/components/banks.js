import React from "react";
import { useState } from "react";
import '../styles/banks.css'
export default function Bank(props){
    const[popup,setPopup]=useState(false)
    const deposits=(props.tod).map(item=>{
        return(
            <div className="deposit-el">{item}</div>
        )
    })
    function handlePop(){
     setPopup(prev=>!prev)
    }
    return(
            <div className="bank">
                <span className="bname">{props.name}</span>
                <button className="bank-btn" onClick={handlePop}><i class="fa-solid fa-caret-down fa-3x"></i></button>
                {popup && <div className="deposits">
                {deposits}
                </div>}
            </div>
        )
}