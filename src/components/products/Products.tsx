import React, {FC, useEffect, useState} from 'react';
import Product from "../product/Product";
import {productModel} from "../../models/productModel";



const Products:FC = ()  => {

    const [products,setProducts] = useState<productModel[]>([])

    useEffect(() => {
            fetch('https://dummyjson.com/products')
                .then(value => value.json())
                .then(({products}) => {
                    // console.log(products)
                    setProducts(products)
                });
        },
        []);
    return(
        <div>


            {
                products.map(({
                                  id, title, description, price, discountPercentage, rating, stock,
                                  brand, category, thumbnail, images
                              }: productModel) => (

                    <Product key={id}
                             id={id}
                             title={title}
                             description={description}
                             price={price}
                             discountPercentage={discountPercentage}
                             rating={rating}
                             stock={stock}
                             brand={brand}
                             category={category}
                             thumbnail={thumbnail}
                             images={images}

                    />))

            }

        </div>
    )
}


export default Products;