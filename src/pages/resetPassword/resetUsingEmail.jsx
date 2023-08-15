import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../../Stayles/resetPass.module.css'

const UsingEmail = () => {
    const navigate = useNavigate()
    return ( 
        <div className={styles.resetPasswordContainer}>
            <form className={styles.resetFormInput}>
                <label>Email </label>
                <div className={styles.inputFields}>
                    <input type='email' placeholder="Enter Email..." />
                    <button onClick={()=>navigate('/verification')} className={styles.submitBtn}>Get Code</button> 
                </div>
                <button onClick={()=>navigate('/reset password')} >Use Email</button>
            </form>
        </div>
     );
}
 
export default UsingEmail;