import { useNavigate } from 'react-router-dom';
import styles from '../../Stayles/newPassword.module.css'
import {BsArrowRight} from 'react-icons/bs'

const NewPassword = () => {
    const navigate = useNavigate()
    return ( 
        <div className={styles.NewPasswordContainer}>
            <form className={styles.NewPasswordForm}>
                <label>New Password </label>
                <div className={ styles.NewPasswordFormInputs }>
                    <label >New password</label>
                    <input type='text' placeholder='Enter New Password' />
                    <label >Confirm password</label>
                    <input type='text' placeholder='Confirm New Password' />
                    <button className={styles.submitBtn} onClick={()=>navigate('/login')} >Reset password <BsArrowRight /> </button> 
                </div>
            </form>
        </div>
     );
}
 
export default NewPassword;