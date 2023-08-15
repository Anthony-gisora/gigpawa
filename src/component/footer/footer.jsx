import styles from '../../Stayles/footer.module.css'
import PatnerCard from '../card/patnerCard';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'


const publicUrl = process.env.PUBLIC_URL ;

const patners = [
    {imgUrl: `${publicUrl}/assets/profile1.jpg`, name: "Anthony Gisemba", position: "Organizer"},
    {imgUrl: `${publicUrl}/assets/profile2.jpg`, name: "Amos Sirima", position: "Technician"},
    {imgUrl: `${publicUrl}/assets/profile3.jpg`, name: "John Doe", position: "Chaireman"}
]

const Footer = () => {
    return ( 
        <div className={ styles.footerContainer }>
            <div className={styles.patnerSocialDescr}>
                    <h2>Team</h2>
                <div className={ styles.patnersContainer }>
                    {
                        patners.map( ( patner ) => {
                            return <PatnerCard imgUrl={patner.imgUrl} name={patner.name} position={patner.position} />
                        })
                    }
                </div>
                <div className={styles.socialMediaHandles}>
                    <BiLogoFacebook style={ { width: "30px", color: "ButtonHighlight", borderRadius:"50%", padding:"8px" ,backgroundColor:"black" ,height: "30px"}}/>
                    <BiLogoInstagram style={{width: "30px", color: "ButtonHighlight", borderRadius:"50%", padding:"8px" ,backgroundColor:"black" ,height: "30px"}}/>
                    <BiLogoTwitter style={{width: "30px", color: "ButtonHighlight", borderRadius:"50%", padding:"8px" ,backgroundColor:"black" ,height: "30px"}}/>
                </div>
                <div className={styles.briefFooterDes}>
                    <h4>Freelance Awaits You </h4>
                    <p>Our Prop Firm has multiple programs to start your journey as a Freelancer. Choose one of our  programs and start freelancing, earn bonuses and profit-splits.</p>
                </div>
            </div>
            <div className={styles.resPowerd}>
                <p>all rights reserved</p>
                <p>powerd by <em>Actict dev</em></p>
            </div>

        </div>
     );
}
 
export default Footer;