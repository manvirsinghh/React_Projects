import '../Navbar.css';
import Logo from '../assets/Logo.png';

function Navbar(){
    return(

        <nav className="navbar">
        <div className="nav-content">
          <div className="logo" style={{ backgroundImage: `url(${Logo})`}}></div>
          <ul className="nav-links">
            <li className="active">Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <button className="hire-btn">HIRE ME</button>
        </div>
      </nav>
    )
}
export default Navbar;