import React from "react";
import { useState } from "react";
import Slider from 'react-input-slider';
import '../styles/calc.css'
export default function Calc(){
    const [amt,setAmt]=useState({x:0,xmax:1000000})
    const[int,setInt]=useState({x:0,xmax:100})
    const[ten,setTen]=useState({x:0,xmax:50})
    const[data,setData]=useState(
        {
            amount:amt.x,
            interest:int.x,
            tenure:ten.x
        }
    )
    function handleChange(event){
        const{name,value}=event.target
        if(name==="amount"){
        setAmt(state=>({...state,x:parseInt(value)}))
        }
        else if (name==="interest"){
            setInt(state=>({...state,x:parseInt(value)}))
        }
        else if(name==="tenure"){
            setTen(state=>({...state,x:parseInt(value)}))
        }
        console.log(amt)
        setData(prevData=>{
            return{
                ...prevData,
                [name]:value
            }
        }
        )
        console.log(data)
    }
    function handleSliderchange(x,name){
        if(name==="amount"){
        setAmt(state => ({ ...state, x }))
        }
        else if(name==="interest"){
            setInt(state=>({...state,x}))
        }
        else if(name==="tenure"){
            setTen(state=>({...state,x}))
        }
        setData(prevData=>{
            return{
                ...prevData,
               [name]:x
            }
        })
    }
  return(
          <div className="calculator">
            <div className="calculator-el">
            <label>Principal Amount</label>
            <Slider
                axis="x"
                x={amt.x}
                xmax={amt.xmax}
                onChange={({x})=>{handleSliderchange(x,"amount")}}
            />
             <input
                type="number"
                name="amount"
                value={data.amount}
                placeholder="Amount in Rupees"
                onChange={handleChange}
            />
            </div>
            <div className="calculator-el">
            <label htmlFor="">Interest</label>
            <Slider
                axis="x"
                x={int.x}
                xmax={int.xmax}
                onChange={({ x }) => {handleSliderchange(x,"interest")}}
                markClassName=""
            />
            <input type="number"
            name="interest"
            value={data.interest}
            onChange={handleChange}
            placeholder="Rate of Interest"
            />
            </div>
            <div className="calculator-el">
            <label htmlFor="">Tenure</label>
            <Slider
             axis="x"
             x={ten.x}
             xmax={ten.xmax}
             onChange={({ x }) =>{handleSliderchange(x,"tenure")}}
             />
            <input type="number"
            placeholder="Number of months"
            onChange={handleChange}
            name="tenure"
            value={data.tenure}
            />
            </div>
            <button className="result-btn">Submit</button>
            </div>
  )
}