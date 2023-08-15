import styles from "../../Stayles/patnersCard.module.css"

const PatnerCard = ( { imgUrl, name, position } ) => {
    return ( 
        <div className={styles.patnerCardContainer}>
            <div className={styles.patnerCardInnerContainer}>
                <div className={styles.patnerImgContainer}>
                    <img src={imgUrl} alt={`${name}'s profile pic`} />
                </div>
                <div className={styles.patnerDetails}>
                    <h3>{name}</h3>
                    <h4>{ position }</h4>
                </div>
            </div>
        </div>
     );
}
 
export default PatnerCard;