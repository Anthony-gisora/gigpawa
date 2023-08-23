import {  NavLink } from "react-router-dom";
import styles from "../../Stayles/navBar.module.css"
import { BiMenu } from 'react-icons/bi'

const NavBar = () => {
    
    return ( 
        <div  className={`${styles.navGenDiv} bg-blue-950`}>
            <div className={ styles.navBarContainer }>
                <div className={styles.logo}>
                    
                    <p>GigPawa</p>
                </div>
                <div className={ styles.altNavLink }>
                    <NavLink to="/signup">SignUp</NavLink>
                    <NavLink to="/Login">Log In</NavLink>
                    <BiMenu style={{width: "30px", height:"30px"}} />
                </div>
                <div className={ styles.navLinks }>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/signup">SignUp</NavLink>
                    <NavLink to="/Login">Log In</NavLink>
                </div>
            </div>
            
        </div>
     );
}
 
export default NavBar;