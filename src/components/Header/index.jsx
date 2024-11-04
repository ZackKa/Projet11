import { NavLink } from 'react-router-dom'
import HomeLogo from '../../assets/LOGO.png'

function Header() {
    return(
        <header>
            <img src={HomeLogo} alt="Logo" />
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} >Accueil</NavLink>
                <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>A propos</NavLink>
            </nav>
      </header>
    )
}
export default Header