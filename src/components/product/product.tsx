import React,{FC} from 'react';

export interface IProductProps{ // remove to own folder!!!!
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export type IProductTypeProps = IProductProps;
const Product: FC<IProductTypeProps> = ({id,

                                     title,
                                     description,
                                     price,
                                     discountPercentage,
                                     rating,
                                     stock,
                                     brand,
                                     category,
                                     thumbnail,
                                     images}) => {
    return (
        <div>
            <h2>#{id}</h2>
            <ul>
                <li>{title}</li>
                <li>{description}</li>
                <li>{description}</li>
                <li>{price}</li>
                <li>{discountPercentage}</li>
                <li>{rating}</li>
                <li>{stock}</li>
                <li>{brand}</li>
                <li>{category}</li>
                <img key={id} src={thumbnail} alt={title} />

                {images && images.map((imgUrl,index) =>(
                    <img key={index} src={imgUrl} alt={title}/>
                ))}
            </ul>
        </div>
    );
};

export default Product;