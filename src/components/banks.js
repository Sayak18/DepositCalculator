import React from "react";
import { useState,useContext } from "react";
import '../styles/banks.css'
import { BankContext } from "../context/bankcontext";
export default function Bank(props){
    const { popup,setPopup} = useContext(BankContext);
    console.log(popup)
    const deposits=(props.tod)?.map((item)=>{
        return(
            <div className="deposit-el">{item.type}</div>
        )
    })
    function handlePop(index){
    //  console.log(i)
    const newpopup=popup?.map((item,i)=>{
        if(i===index){
            return !item;
        }
        else{
            return false
        }
    })
     setPopup(
     newpopup
     )
     console.log(popup)
    }
    // console.log(props.popup)
    const cname="deposits-"+props.index
    return(
            <div className="bank">
                <div className="bank-head">
                <span className="bname">{props.name}</span>
                <button className="bank-btn" onClick={()=>{handlePop(props.index)}}><i class="fa-solid fa-caret-down fa-1x"></i></button>
                </div>
                {popup[props.index]? <div className={cname}>
                {deposits}
                </div>:
                null}
            </div>
        )
}