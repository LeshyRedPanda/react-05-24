import React, {FC} from "react";
import {productModel} from "../../models/productModel";




const Product:FC<productModel>=({
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images}) =>{
    return(
        <div>
            <h3>ID : {id}</h3>
            <ul>
                <li>Title : {title}</li>
                <li>Description : {description}</li>
                <li>Price : {price}</li>
                <li>Discount Percentage : {discountPercentage}</li>
                <li>Rating : {rating}</li>
                <li>Stock : {stock}</li>
                <li>Brand : {brand}</li>
                <li>Category : {category}</li>
                <li>Thumbnail : {thumbnail}</li>
            </ul>
            {images && images.map((imgUrl,index) =>(<img key={index} src={imgUrl} alt={title}/>))}

        </div>
    )
}




export default Product;