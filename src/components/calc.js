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
       
    }
  return(
          <div className="calculator">
            <div className="calculator-el">
            <Slider
                axis="x"
                x={amt.x}
                xmax={amt.xmax}
                onChange={({ x }) => setAmt(state => ({ ...state, x }))}
            />
             <input
                type="number"
                value={amt.x}
                placeholder="Amount in Rupees"
                onChange={()=>{handleChange("amt")}}
            />
            </div>
            <div className="calculator-el">
            <Slider
                axis="x"
                x={int.x}
                xmax={int.xmax}
                onChange={({ x }) => setInt(state => ({ ...state, x }))}
                markClassName=""
            />
            <input type="number"
            value={int.x}
            />
            </div>
            <div className="calculator-el">
            <Slider
             axis="x"
             x={ten.x}
             xmax={ten.xmax}
             onChange={({ x }) => setTen(state => ({ ...state, x }))}
             />
            <input type="number"
            placeholder="Number of months"
            onChange={handleChange}
            name="ten"
            value={data.tenure}
            />
            </div>
            <button>Submit</button>
            </div>
  )
}