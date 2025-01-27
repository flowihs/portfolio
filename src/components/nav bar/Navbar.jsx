import { NavLink } from 'react-router-dom';
import './style.css';
import ButtonDarkMode from '../buttonDarkMode/ButtonDarkMode';


export default function Navbar () {
    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    return (
        
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                
                    <NavLink to="/" className="logo">
						<strong>My</strong> portfolio
					</NavLink>
              
                
                <ButtonDarkMode />


                <ul className="nav-list">
                   
                    <li className="nav-list__item"><NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}> Home</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/Projects" className={({isActive}) => isActive ? activeLink : normalLink}> Projects</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/Contacts" className={({isActive}) => isActive ? activeLink : normalLink}> Contacts</NavLink></li>
                </ul>
            </div>
            
        </div>
      </nav>
      
    )
}