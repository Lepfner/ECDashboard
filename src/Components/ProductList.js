import React from 'react';
import Proizvod from './Proizvod';

const ProductList = ({items}) => {

    return (
        <div>
        <div>
            <h1 className="text-9x1 ml-24 pt-2">Proizvodi</h1>
        </div>
        <div className="grid grid-rows-4 h-full grid-cols-2 ml-10 w-full">
            {items.slice(0 , 8).map(post =>
            (<Proizvod key={post.id} post={post}/>
            ))}
        </div>
        </div>
    )
}

export default ProductList
