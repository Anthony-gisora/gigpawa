import { NavLink, useNavigate } from "react-router-dom";
import styles from "../../Stayles/signUpLandingPage.module.css"
import { BsArrowRight } from 'react-icons/bs'

const SignUpLandingPage = () => {

    const navigate = useNavigate()

    return ( 
        <div style={ { display: "flex", flexDirection: "column", height: "90%", alignItems: "center", justifyContent:"center"}}>
        
        <div className={styles.signUpLPContainer}>
            <div className={styles.clientContainer}>
                <p className={styles.clientDes}>
                    Sign Up to Gig Pawa as a <em>CLient,</em> offer jobs and get back the solutions.
                </p>
                <button className={styles.getStarted} onClick={()=>{navigate("/signup/client")}}>Get started as Client <BsArrowRight /> </button>
            </div>
            <div className={styles.seekerContainer}>
                <p className={styles.jobSeekerDes}>
                    Sign Up to Gig Pawa as a <em>job seeker,</em>bid and take jobs for Cash.
                </p>
                <button className={styles.getStarted} onClick={() =>{ navigate("/signup/jobseeker") }} >Get started as Job Seeker <BsArrowRight /> </button>

            </div>
            
        </div>
        <p>Have an account? <NavLink to='/login'>Login</NavLink> </p>
        </div>
     );
}
 
export default SignUpLandingPage;