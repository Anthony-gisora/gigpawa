import {  useNavigate } from 'react-router-dom';
import styles from '../../Stayles/resetPass.module.css'
import { BsArrowRight } from 'react-icons/bs'

const ResetPass = () => {
    const navigate = useNavigate()
    return ( 
        <div className={styles.resetPasswordContainer}>
            <form className={styles.resetFormInput}>
                <label>Phone </label>
                <div className={styles.inputFields}>
                    <input type='number' placeholder='Enter Phone Number' />
                    <button onClick={() => navigate('/verification')} className={styles.submitBtn}>Get Code <BsArrowRight /> </button> 
                </div>
                <button onClick={()=>navigate('/reset using email')} >Use Email</button>
            </form>
        </div>
     );
}
 
export default ResetPass;