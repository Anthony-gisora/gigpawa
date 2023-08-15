import { useNavigate } from 'react-router-dom';
import styles from '../../Stayles/verification.module.css'
import {BsArrowRight} from 'react-icons/bs'

const Verification = () => {
    const navigate = useNavigate()
    return ( 
        <div className={styles.verificationContainer}>
            <form className={styles.verificationForm}>
                <label>Phone </label>
                <div className={styles.verificationFormInputs}>
                    <input type='text' placeholder='Enter Verification Code' />
                    <button className={styles.submitBtn} onClick={()=>navigate('/new password')} >Reset password <BsArrowRight /> </button> 
                </div>
            </form>
        </div>
     );
}
 
export default Verification;