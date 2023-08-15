import styles from "../../Stayles/card.module.css"
import { motion } from 'framer-motion';

const Card = ( { title, description } ) => {
    return ( 
        <motion.div className={ styles.cardContainer }
        
            whileInView={ { y: 0} }
            initial={ { y: 90 } }
            transition={{type: 'tween' , duration: 0.6}}
        >
            <div >
                <h1>{ title }</h1>
            </div>
            <div className={styles.cardDescription}>
                <p className={ styles.pDes }>{ description }</p>
            </div>
        </motion.div>
     );
}
 
export default Card;