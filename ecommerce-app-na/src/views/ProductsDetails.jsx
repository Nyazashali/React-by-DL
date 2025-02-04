import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function ProductDetails() {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

 useEffect(() => {
   getProductInfo();
 }, []);

 const getProductInfo = () => {
    fetch('https://localhost:4000/products/' + params.productId)
    .then((response) => response.json())
    .then(parsedResponse => {
        getProductInfo(parsedResponse);
    })
 };

 return(
    <div className='flex my-5 px-4'>
        <div className='w-1/3'>
          <img src={getProductInfo.imgSrc} />
        </div>
        <div className='w-2/3'>
          <h1 className='text-2xl font-bold text-blue-500'>{getProductInfo.name}</h1>
        </div>
        </div>
 )
}

export default ProductDetails;