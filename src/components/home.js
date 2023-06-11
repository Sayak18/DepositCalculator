// import react from "react"
import NavBar from './nav';
import Calc from "./calc";
import"../styles/home.css";
import Bank from "./banks";
import db from "./firebase";
import { getDoc,doc } from "firebase/firestore";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { BankContext } from '../context/bankcontext';
export default function Home(){
const[data,setData]=useState()
const[popup,setPopup]=useState(new Array(8).fill(false))
useLayoutEffect(()=>{
    async function getBanks(){
    const docSnap = await getDoc(doc(db, "bankdata/banks"));
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data().name)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }  
    }
    getBanks() 
},[])
const banks=data?.map((item,i)=>{
    return(
        <Bank
        {...item} 
        popup={popup}
        Popupfunc={setPopup}
        index={i}
         />
    )
})
    return(
        <div className="home"> 
        <BankContext.Provider value={{popup,setPopup}}>
        <NavBar/>
        <div className="body">
        <div className="bank-container">
            {banks}
            <div className="foot"></div>
        </div>
        <Calc/>
        </div>
        </BankContext.Provider>
        </div>
    )
}