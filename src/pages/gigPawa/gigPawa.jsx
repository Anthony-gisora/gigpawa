
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
        <div className='flex flex-1 flex-row '>
            <div className='w-[20%] md:block hidden'>
                left side bar
            </div>
            <div className='w-[60%] sm:w-[100%]'>
                {
                    workFeeds.map( ( work, index ) => {
                        return (
                            <div key={index} className=' flex flex-col  mx-0 md:mx-2 items-center justify-center bg-green-200 rounded-[10px] mb-3 px-4 '>
                                <h2>{ work.title }</h2>
                                <p>{ work.description }</p>
                                <div className='flex flex-col'>
                                    <div className='bg-green-500 blur-xl tracking-tight w-100 '>
                                        {work.skills}
                                    </div>
                                    <div className='flex'>
                                        <p className='mx-0 md:mx-2 py-0 md:py-1 px-1 border-rounded rounded-xl my-1 md:my-1 text-[16px] border w-fit  flex items-center justify-center bg-slate-800 text-white text-center'>$15-$20/hr</p>
                                        <p className='mx-0 md:mx-2 py-0 md:py-1 px-1 border-rounded rounded-xl my-1 md:my-1 text-[16px] border w-fit  flex items-center justify-center bg-slate-800 text-white text-center' >Due 3 weeks time</p>
                                        <p className='mx-0 md:mx-2 py-0 md:py-1 px-1 border-rounded rounded-xl my-1 md:my-1 text-[16px] border w-fit  flex items-center justify-center bg-slate-800 text-white text-center' >Posted 3 min ago </p>
                                        <p className='mx-0 md:mx-2 py-0 md:py-1 px-1 border-rounded rounded-xl my-1 md:my-1 text-[16px] border w-fit  flex items-center justify-center bg-slate-800 text-white text-center' >4 proposals</p>
                                        <p className='mx-0 md:mx-2 py-0 md:py-1 px-1 border-rounded rounded-xl my-1 md:my-1 text-[16px] border w-fit  flex items-center justify-center bg-slate-800 text-white text-center' > <FaStar color='rgb(0, 255, 0)' /><FaStar color='rgb(0, 255, 0)' /><FaStar color='rgb(0, 255, 0)' /><FaStar /><FaStar /> verified</p>
                                        <p className='mx-0 md:mx-2 py-0 md:py-1 px-1 border-rounded rounded-xl my-1 md:my-1 text-[16px] border w-fit  flex items-center justify-center bg-slate-800 text-white text-center' > <BiGlobe /> location</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-[20%] md:block hidden'>
                right content
            </div>
        </div>
     );
}
 
export default GigPawa;