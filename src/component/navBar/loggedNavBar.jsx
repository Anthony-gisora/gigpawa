import { AiOutlineSearch, AiOutlineMenu, AiOutlineBell, AiOutlineMessage } from 'react-icons/ai'
import dp from '../../images/profile.jpg'

const LoggedInNavBar = () => {
    return ( 
        <div className="flex items-center justify-between ">
            <div className="m-3 w-[30px] h-[30px] rounded-full md:hidden">
                <img src={dp} alt='dp' className='w-full h-full rounded-full'/>
            </div>  
            <div className="m-6 text-[24px] text-[#723881] w-[50%">
                GigPawa
            </div>
            {/* on large screen */}
            <div className="hidden md:flex  w-[50%] items-center">
                <div className="relative w-full m-5 flex items-center">
                    <input type="search" placeholder='search category...' className=' placeholder:text-[#afafaf] pl-2 pr-9 absolute h-9 right-0 flex items-center rounded-md'/>
                    <AiOutlineSearch className='text-[24px] absolute right-0 rounded-lg p-1 mr-1 bg-sky-500 ' />
                </div>
                <div className="">
                    <AiOutlineBell className='text-[24px] rounded-lg border-3 m-2 ' />
                </div>
                <div className="">
                    <AiOutlineMessage className='text-[24px] rounded-lg border-3 m-2 '/>
                </div>
                <div className="m-3 w-[30px] h-[30px] rounded-full">
                    <img src={dp} alt='dp' className='w-full h-full rounded-full'/>
                </div>
            </div>
            {/* on smaller devices */}
            <div className="md:hidden m-6 flex space-x-9">
                <div className="">
                    <AiOutlineSearch className='text-[24px]' />
                </div>
                <div className="">
                    <AiOutlineMenu className='text-[24px]'/> 
                </div>
            </div>
        </div>
     );
}
 
export default LoggedInNavBar;