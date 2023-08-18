import styles from "../../Stayles/card.module.css"
import { motion } from 'framer-motion';

const Card = ( { title, description } ) => {
    return ( 
        <motion.div className='flex flex-col items-center justify-center m-6'
        
            whileInView={ { y: 0} }
            initial={ { y: 90 } }
            transition={ { type: 'tween', duration: 0.6 } }
        >
            <div >
                <h1 className='text-[24px] md:text-[28px] font-semibold'>{ title }</h1>
            </div>
            <div className='text-center text-[18px] md:text-[20px]'>
                <p className={ styles.pDes }>{ description }</p>
            </div>
        </motion.div>
     );
}
 
export default Card;