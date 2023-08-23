import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

const Jfeeds = ( { title, skills, description } ) => {
    return ( 
        <div className="md:mx-auto my-4 border rounded-md p-1 md:p-[1%] w-full">
            <div className="">    
                <div className="flex flex-col">
                    <div className="text-[24px] font-semibold">{ title }</div>
                    <div className="flex">
                        <p className='text-gray-500'>entry level</p>-
                        <p className='text-gray-500'>Deal: $25</p>-
                        <p className='text-gray-500'>posted 3 min ago</p>
                    </div>
                </div>
                <div className="flex my-2 items-center justify-end space-x-6 pr-3">
                    <p><FaThumbsUp className='text-[20px] text-green-800'/></p>
                    <p><FaThumbsDown className='text-[20px] text-red-800'/></p>
                </div>
            </div>
            <div className="">
                <p className='text-center my-4'>{ description }</p>
            </div>
            <div className="flex overflow-x-scroll  w-full space-x-2">
                <p className='bg-gray-300 text-sm  w-fit my-2 p-1.5 rounded-md text-gray-600'>{ skills }</p>
                <p className='bg-gray-300 text-sm  w-fit my-2 p-1.5 rounded-md text-gray-600'>{ skills }</p>
                <p className='bg-gray-300 text-sm  w-fit my-2 p-1.5 rounded-md text-gray-600'>{ skills }</p>
              
            </div>
            <div className="flex  w-full space-x-3 my-2 overflow-">
                <p className='text-gray-500 text-sm md:text-[16px] my-2 '>10-20-proposals</p>
                <p className='text-gray-500 text-sm md:text-[16px] my-2 '>payment verification</p>
                <p className='text-gray-500 text-sm md:text-[16px] my-2 '>location</p>
            </div>
        </div>
     );
}
 
export default Jfeeds;