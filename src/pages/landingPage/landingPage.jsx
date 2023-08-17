import React from 'react'
import styles from "../../Stayles/landingPage.module.css"
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import Card from '../../component/card/card';
import Category from '../../component/category/Category';
import {FaAngleRight} from 'react-icons/fa'

//hard coded categories inplae of a get request from server or API
export const jobSeeking = [
  {key: 1,title: "Create a Compelling Profile", description: "Build a detailed and engaging profile that highlights your skills, experience, and expertise. Use a professional photo and write a captivating bio that showcases what makes you unique." },
  {key: 2,title: "Browse and Apply", description: "Explore GigPawa's job listings to find projects that match your skills and interests. Tailor your proposals to each job, demonstrating your understanding of the client's needs and how you can provide value."},
  {key: 3,title: "Showcase Your Portfolio", description: "Upload samples of your past work or relevant projects to demonstrate your capabilities. A strong portfolio can set you apart and showcase your skills to potential clients."},
  {key: 4,title: "Networking", description: "Engage with other freelancers and clients within GigPawa's community. Networking can lead to referrals and collaborations, helping you establish a strong presence and reputation on the platform."},
  {key: 5,title: "Skill Tests and Certifications", description: "Take advantage of any skill tests or certifications offered by GigPawa. A strong performance in these assessments can boost your credibility and attract more clients."},
  {key: 6,title: "Set Competitive Rates", description: "Determine your pricing structure based on your skills, experience, and the market demand. Be competitive while ensuring you are adequately compensated for your work."},
  {key: 7,title: "Craft Compelling Proposals", description: "When applying for jobs, craft personalized and well-written proposals that showcase your understanding of the project and how your skills can fulfill the client's needs."},
  {key: 8,title: "Deliver Quality Work", description: "Once hired, focus on delivering high-quality work that exceeds client expectations. Satisfied clients are more likely to provide positive reviews and recommend you to others."},
  {key: 9,title: "Seek Feedback and Improve", description: "After completing a project, ask clients for feedback and use it to improve your skills and services. Continuous improvement is key to building a successful freelancing career."},
  {key: 10,title: "Consistency and Reliability", description: "Maintain consistency in your work and meet deadlines consistently. This reliability will help you establish trust and long-term relationships with clients."},
  {key: 11,title:"Upgrade Skills", description: "Stay updated with industry trends and continuously enhance your skills. Learning new technologies or techniques can make you a more attractive candidate for a wider range of projects."}
]

//hard coded categories inplae of a get request from server or API
export const categories = [
  {category: "Virtual Assistant", key: 1},
  {category: "software developer", key: 2},
  {category: "FrontEnd Developer", key: 3},
  {category: "Transcription", key: 4},
  { category: "Data Entry", key: 5 },
  {category: "Data Analyst", key: 6},
  { category: "Forex Trader", key: 7 },
  { category: "Cyber Security", key: 8 },
  {category: "Virtual Assistant", key: 1},
  {category: "software developer", key: 2},
  {category: "FrontEnd Developer", key: 3},
  {category: "Transcription", key: 4},
  { category: "Data Entry", key: 5 },
  {category: "Data Analyst", key: 6},
  { category: "Forex Trader", key: 7 },
  { category: "Cyber Security", key: 8 },
  {category: "Virtual Assistant", key: 1},
  {category: "software developer", key: 2},
  {category: "FrontEnd Developer", key: 3},
  {category: "Transcription", key: 4},
  { category: "Data Entry", key: 5 },
  {category: "Data Analyst", key: 6},
  { category: "Forex Trader", key: 7 },
  { category: "Cyber Security", key: 8 },
  {category: "Virtual Assistant", key: 1},
  {category: "software developer", key: 2},
  {category: "FrontEnd Developer", key: 3},
  {category: "Transcription", key: 4},
  { category: "Data Entry", key: 5 },
  {category: "Data Analyst", key: 6},
  { category: "Forex Trader", key: 7 },
  { category: "Cyber Security", key: 8 },
  
]

const LandingPage = () => {

  const navigate = useNavigate()


return (
  <div className={styles.landingPageContaine}>
    <div className={ styles.categoryList } >
      {
        categories.map( ( category ) => {
          return (
            <Category category={category.category} key={category.key} />
          )
        })
      } 
    </div>
    <div className={ styles.animatedDesc }>
      <h1 className='fw-700'>GigPawa</h1>
      <h2>Where Freelancing Dreams Take Flight!</h2>
      <p> Elevate your skills, connect with clients, and savor the sweet taste of success in the world of freelancing. Join our vibrant community today and add a dash of excitement to your freelance journey!<motion.button whileInView={{ x: 20}} initial={{scale: 1}} transition={{type:"tween", duration: 1}} className={styles.getStatedBtn} onClick={ () => navigate('/signUp') }>Get Started <FaAngleRight /> </motion.button></p>
      
    </div>
    <motion.div
      whileInView={ { y: 0} }
      initial={ { y: 90 } }
      transition={{type: 'tween' , duration: 0.6}}
      className={ styles.briefDesc }>
      <div className={styles.briefFirst}>
        <motion.h3
          whileInView={ { y: 0} }
          initial={ { y: 90} }
          transition={{type: 'tween' , duration: 1}}
        >Get Started</motion.h3>

        <motion.p
          whileInView={ { y: 0} }
          initial={ { y: 90} }
          transition={{type: 'tween' , duration: 1}}
        >"Embark on your freelancing journey with GigPawa, where your skills meet opportunity! Join our vibrant community of talented freelancers and clients seeking top-notch services. Whether you're a seasoned pro or just starting out, GigPawa provides a platform to showcase your expertise, connect with clients, and build your dream freelance career. Take control of your work-life balance, set your own rates, and enjoy the flexibility of freelancing with GigPawa. Sign up today and unleash your potential in the world of freelancing!"</motion.p>

      </div>
    </motion.div>
    <div className={ styles.empower }>
      {
        jobSeeking.map( ( info ) => {
          return (
            <Card title={ info.title } description={ info.description } key={info.key}/>
          )
        })
      } 
    </div>

      <div className={styles.hzScrollSeekingJob}>
       
      </div>
    
  </div>


  )
}

export default LandingPage
