import React, {FC, useEffect, useState} from 'react';
import Product,{IProductTypeProps,IProductProps} from "../product/product";
import {log} from "node:util";
import product from "../product/product";
// import product from "../product/product";

const Products: FC = () => {

    const [products,setProducts] = useState<IProductProps[]>([]);


    useEffect(() => {
            fetch('https://dummyjson.com/products')
                .then(value => value.json())
                .then(({products}) => {
                    // console.log(products)
                    setProducts(products)
                });
        },
    []);

    console.log('.')

    return (
        <div>

            <h1>hello</h1>

            {
                products.map(({id,title,description,price,discountPercentage,rating,stock,
                                  brand,category,thumbnail,images}:IProductProps) => (

                            <Product key = {id}
                            id = {id}
                            title = {title}
                            description = {description}
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

