import { useNavigate } from 'react-router-dom';
import styles from '../../Stayles/createProfile.module.css'
import { CgProfile } from 'react-icons/cg'


const CreateProfile = () => {
    const navigate = useNavigate()
    return ( 
        <div className={ styles.createProfileContainer }>
            <h1>Create Your Profile</h1>
            <form className={ styles.createProfileForm }>
                <label htmlFor="dp" className={ styles.ProfilePic }> <CgProfile style={ { width: "100%", fontWeight: "100", height: "100%" } } /> </label>
                <label htmlFor="dp" className={styles.upload}>Upload profile</label>
                <input style={ { display: "none" } } id='dp' type='file' />
                <label htmlFor="spacial">Speciality</label>
                <input id='spacial' type='text' placeholder='Enter specialized area' />
                <label htmlFor="hours">Hours of Work per Day</label>
                <input id='hours' type='text' placeholder='Enter hours per day' />
                <label htmlFor="category">Category</label>
                <input id='category' type='text' placeholder='Enter specialized categories' />
                <label htmlFor="potfolio">Link to Your Portfolio</label>
                <input id='potfolio' type='url' placeholder='Enter Link to your portfolio' />
                <label htmlFor="education">Education</label>
                <input id='education' type='text' placeholder='Enter Link to your portfolio if any' />
                <label htmlFor="country">Country</label>
                <input id='country' type='text' placeholder='Enter country ...' />
                <label htmlFor="Experience">Brief description of other Experience</label>
                <textarea id="Experience" cols="30" rows="4" placeholder='Brief description...'></textarea>
                <div>
                    <input type='checkbox' id='visibility' />
                    <label htmlFor="visibility">Profile Visibility</label>
                </div>
                <button onClick={()=>navigate('/gigpawa')} className={styles.submitBtn} type='submit'> Create</button>
            </form>
        </div>
     );
}
 
export default CreateProfile;