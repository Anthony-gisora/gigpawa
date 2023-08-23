import styles from '../../Stayles/footer.module.css'
import PatnerCard from '../card/patnerCard';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'


const publicUrl = process.env.PUBLIC_URL ;

const patners = [
    {imgUrl: `${publicUrl}/assets/top.jpg`, name: "Anthony Gisemba", position: "Full stack Developer"},
    {imgUrl: `${publicUrl}/assets/kate.png`, name: "Amos Sirima", position: "Backend Developer"},
    {imgUrl: `${publicUrl}/assets/legend.png`, name: "Clifford Otieno", position: "Founder"}
]

const Footer = () => {
    return ( 
        
        <div className={  ` ${ styles.footerContainer } bg-[AOBFE0] ` }>
            <div className={styles.patnerSocialDescr}>
                    <h2>Team</h2>
                <div className={ `${styles.patnersContainer}  shadow-xl text-xl grid lg:grid-cols-3 font-medium hover:scale-105 duration-500 gap-3 ` }>
                    {
                        patners.map( ( patner ) => {
                            return <PatnerCard imgUrl={patner.imgUrl} name={patner.name} position={patner.position} />
                        })
                    }
                </div>
               
                <div className={styles.briefFooterDes}>

    



                    <h4 className='mt-[90px]'>Freelance Awaits You </h4>
                    <p>Our Prop Firm has multiple programs to start your journey as a Freelancer. Choose one of our  programs and start freelancing, earn bonuses and profit-splits.</p>
                </div>
            </div>
            <div className={styles.resPowerd}>
      
        
                <p>all rights reserved</p>
                <p className='font-semibold text-xl mt-[75px] mb-[60px] '>powered by <em className='font-bold text-xl'>Arctic dev</em></p>
                
                
                
                <div className={styles.socialMediaHandles}>
                <BiLogoFacebook style={ { width: "30px", color: "ButtonHighlight", borderRadius:"50%", padding:"8px" ,backgroundColor:"black" ,height: "30px"}}/>
                <BiLogoInstagram style={{width: "30px", color: "ButtonHighlight", borderRadius:"50%", padding:"8px" ,backgroundColor:"black" ,height: "30px"}}/>
                <BiLogoTwitter style={{width: "30px", color: "ButtonHighlight", borderRadius:"50%", padding:"8px" ,backgroundColor:"black" ,height: "30px"}}/>
                
                </div>
            </div>
            </div>
            
        
     );
}
 
export default Footer;