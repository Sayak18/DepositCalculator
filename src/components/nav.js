import react from "react"
import "../styles/nav.css"
export default function NavBar(){
    return(
      <div className="container">
        <header>
          <h1 className="title">Savings.com</h1>
          <nav>  
            <a className="nav-el" href='#'>Home</a>
            <a className="nav-el" href="#">About</a>
            <a className="nav-el" href="#">News</a>
            <a className="nav-el" href="#">Banks</a>
            <a className="nav-el" href="#">About Us</a>
            <a className="nav-el" href="#">FAQ</a>
          </nav>
        </header>  
      </div>
    )
}