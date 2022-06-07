import React from 'react';
import styles from './Products.module.css';

const Product = ({data}) => {
  return (
    <div style={{backgroundColor:data.color}} className={styles.container}>
      
        <div>
            {console.log(data)}
            <p>{data.date}</p>
            <button>{data.button}</button>
            <h3>{data.heading}</h3>
            <h3>{data.subHeading}</h3>
            <p>{data.device}-mobile</p>
        </div>
        <div>
           <div><img src={data.logo}/></div>
           <div><img src={data.arrow}/></div>
        </div>
    </div>
  )
}

export default Product