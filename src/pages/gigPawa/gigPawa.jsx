
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
            skills: "Digital marketing",
            description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
        },
        {
            title: "Product Marketing Specialist",
            skills: "back-end",
            description: "We are looking for a Product Marketing Specialist to join our team. In this role, you will be responsible for creating product marketing material for us, utilizing the specifications and information provided by our suppliers in China. Your ability to organize and pull this information together will play a pivotal role in our marketing efforts. *Responsibilities:* - Create compelling product marketing material using specifications and information provided - Organize and consolidate product information to ensure accuracy and consistency - Collaborate with cross-functional teams, including suppliers and internal stakeholders, to gather relevant information - Develop product positioning and messaging that effectively communicates the value proposition to customers - Collaborate with the marketing team to create and execute marketing campaigns and strategies - Keep up-to-date with industry trends and competitor activities to identify new marketing opportunities - Assist in the creation and execution of marketing events and promotions To apply please share your portfolio with us",
        }
    ]
    return ( 
        <div className='flex flex-row w-[100%]'>
            <div className='w-[20%] md:block hidden'>
                left side bar
            </div>
            <div className='w-[100%] mg:w-[60%] '>
                {
                    workFeeds.map( ( work, index ) => {
                        return (
                            <div key={index} className='border my-2  border-blue-950 rounded-md flex flex-col mg:mx-1 mg:mx-auto px-1 space-y-4 items-center justify-center w-[100%]'>
                                <h2 className='text-[24px] font-bold '>{ work.title }</h2>
                                <p className='px-2 text-[18px]'>{ work.description }</p>
                                <div className='flex flex-col justify-start w-[100%]'>
                                    <div className='h-fit flex flex-col m-2 w-[100%]'>
                                        <p className='text-[18px] font-semibold'>Skills</p>
                                        <div className='h-fit flex flex-wrap justify-start w-[100%] m-2'>
                                            <p className='border  my-auto rounded-md p-1 w-fit bg-[#103536a0]'>{work.skills}</p>
                                        </div>
                                    </div>
                                    <div className='h-fit flex flex-wrap items-center justify-center w-[100%] mb-2'>
                                        <p className='border  my-auto rounded-md p-1 w-fit bg-[#103536a0]    '>$15-$20/hr</p>
                                        <p className='border  my-auto rounded-md p-1 w-fit bg-[#103536a0]    ' >Due 3 weeks</p>
                                        <p className='border  my-auto rounded-md p-1 w-fit bg-[#103536a0]    ' >Posted 3 min ago </p>
                                        <p className='border  my-auto rounded-md p-1 w-fit bg-[#103536a0]    ' >4 proposals</p>
                                        <p className='border  my-auto rounded-md p-1 w-fit bg-[#103536a0]    flex' > <FaStar color='rgb(0, 255, 0)' /><FaStar color='rgb(0, 255, 0)' /><FaStar color='rgb(0, 255, 0)' /><FaStar /><FaStar /> verified</p>
                                        <p className='border  my-auto rounded-md p-1 w-fit bg-[#103536a0]    flex' > <BiGlobe /> location</p>
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