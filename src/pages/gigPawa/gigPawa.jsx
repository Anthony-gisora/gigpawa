import styles from '../../Stayles/gigpawa.module.css'
import { FaStar } from 'react-icons/fa'
import { BiGlobe } from 'react-icons/bi'


const GigPawa = () => {
    const workFeeds = [
        {
            title: "Product Marketing Specialist",
            skills: "frent-End",
            description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
        },
        {
            title: "Product Marketing Specialist",
            skills:  "back-end",
            description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
        },
        {
            title: "Product Marketing Specialist",
            skills: "frent-End",
            description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
        },
        {
            title: "Product Marketing Specialist",
            skills: "back-end",
            description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
        },
        {
            title: "Product Marketing Specialist",
            description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
        },
        {
            title: "Product Marketing Specialist",
            description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
        }
    ]
    return ( 
        <div className={styles.gigPawaContainer}>
            <div className={styles.leftContent}>
                left side bar
            </div>
            <div className={styles.feedsContainer}>
                {
                    workFeeds.map( ( work, index ) => {
                        return (
                            <div key={index}>
                                <h2>{ work.title }</h2>
                                <p>{ work.description }</p>
                                <div>
                                    <div>
                                        {work.skills}
                                    </div>
                                    <div className={styles.verifDetails}>
                                        <p>$15-$20/hr</p>
                                        <p>Due 3 weeks time</p>
                                        <p>Posted 3 min ago </p>
                                        <p>4 proposals</p>
                                        <p> <FaStar color='rgb(0, 255, 0)' /><FaStar color='rgb(0, 255, 0)' /><FaStar color='rgb(0, 255, 0)' /><FaStar /><FaStar /> verified</p>
                                        <p> <BiGlobe /> location</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.rightContent}>
                right content
            </div>
        </div>
     );
}
 
export default GigPawa;