import { NavLink } from "react-router-dom";
import Jfeeds from "../../component/Jfeed";
import dp from '../../images/profile.jpg'


export const workFeeds = [
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
        skills: "Digital marketing",
        description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
    },
    {
        title: "Product Marketing Specialist",
        skills: "back-end",
        description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
    }
]


const JobFeeds = () => {
    return ( 
        <div className="mx-auto  md:px-7 w-full flex justify-between ">
            <div className=" md:w-[60%] w-full">    
                <div className="mt-4">
                    <NavLink className='mx-auto'>Job Match</NavLink>
                    <NavLink className='mx-auto' >Recent</NavLink>
                    <NavLink className='mx-auto'>Saved Match</NavLink>
                </div>
                <div className="w-full">

                {
                    workFeeds.map( ( work, index ) => {
                        return <Jfeeds title={ work.title } skills={ work.skills } description = {work.description} />
                    })
                }
                </div>
            </div>
            <div className="hidden md:border md:p-4  md:flex md:flex-col md:w-[37%] md:my-5 md:mx-auto  ">
                <div className="flex items-center  flex-col  h-[7%] border">
                    <div className="m-5 w-[60px] h-[60px] rounded-full">
                        <img src={dp} alt="" className="w-full h-full rounded-full"/>
                    </div>
                    <p className='font-semibold text-[16px]' >Username</p>
                    <p>Category</p>
                </div>

            </div>
        </div>
     );
}
 
export default JobFeeds;