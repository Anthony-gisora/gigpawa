import styles from '../../Stayles/category.module.css'

const Category = ( { category } ) => {
    return ( 
        <div className={styles.categoryContainer}>
            <p className={styles.pCategory} >{ category }</p>
        </div>
     );
}
 
export default Category;