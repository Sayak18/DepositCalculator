import react from "react"
import {Link} from "react-router-dom"
import "../styles/nav.css"
export default function NavBar(){
    return(
      <div className="container">
        <header>
          <h1 className="title">Savings.com</h1>
          <nav>  
            <Link className="nav-el" to="/" >Home</Link>
            <Link className="nav-el" to="/about">About</Link>
            <Link className="nav-el" to="/news">News</Link>
            <Link className="nav-el" to="/banks">Banks</Link>
            <Link className="nav-el" to="/aboutus">About Us</Link>
            <Link className="nav-el" to="/faq">FAQ</Link>
          </nav>
        </header>  
      </div>
    )
}