import React from 'react';
import Product from './Product';


const Products = () => {

    const arr=[{date:"28/10/2020",logo:"https://bgr.com/wp-content/uploads/2021/09/amazon-thumb.jpg",arrow:"https://static.thenounproject.com/png/707143-200.png",
                button:"Case Study", heading:"Amazon Gift",subHeading:"Pay",device:"Desktop",color:"#ffff00"},
                {date:"17 sep 2020",logo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",arrow:"https://static.thenounproject.com/png/707143-200.png",
                button:"Case Study",  heading:"Apple Gift ",subHeading:"Payment",device:"MacOs",color:"#f5f5f5"}]
  return (
    <div>
        {arr.map((elem)=> (
              <Product data={elem}/>
           
        ))}
        {/* <Product data={arr[0]}/>
        <Product data={arr[1]} /> */}
    </div>
  )
}

export default Products