import React from "react";
import '../styles/banks.css'
export default function BankList(){
    return(
        <div className="bank-container">
            <div className="bank">
                <span className="bname">State Bank of India</span>
                <button className="bank-btn"><i class="fa-solid fa-caret-down fa-3x"></i></button>
            </div>
            <div className="bank">
                <span className="bname">UCO Bank</span>
                <button className="bank-btn"><i class="fa-solid fa-caret-down fa-3x"></i></button>
            </div>
            <div className="bank">
                <span className="bname">Punjab National Bank</span>
                <button className="bank-btn"><i class="fa-solid fa-caret-down fa-3x"></i></button>
            </div>
            <div className="bank">
                <span className="bname">HDFC Bank</span>
                <button className="bank-btn"><i class="fa-solid fa-caret-down fa-3x"></i></button>
            </div>
            <div className="bank">
                <span className="bname">Bank of Baroda</span>
                <button className="bank-btn"><i class="fa-solid fa-caret-down fa-3x"></i></button>
            </div>
            <div className="bank">
                <span className="bname">Axis Bank</span>
                <button className="bank-btn"><i class="fa-solid fa-caret-down fa-3x"></i></button>
            </div>
            <div className="bank">
                <span className="bname">Post Office</span>
                <button className="bank-btn"><i class="fa-solid fa-caret-down fa-3x"></i></button>
            </div>
            <div className="bank">
                <span className="bname">ICICI Bank</span>
                <button className="bank-btn"><i class="fa-solid fa-caret-down fa-3x"></i></button>
            </div>
            <footer></footer>
        </div>
    )
}