import { useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
    const products = [
        
            {
                id: 1,
                name: 'realme P1 5G (Phoenix Red, 128 GB)  (8 GB RAM)',
                price: '₹15,999',
                discount: '27% off',
                imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70',
                specifications: [
                    '8 GB RAM | 128 GB ROM | Expandable Upto 2 TB',
                    '16.94 cm (6.67 inch) Full HD+ Display',
                    '50MP + 2MP | 16MP Front Camera',
                    '5000 mAh Battery',
                    'Dimensity 7050 Processor',
                    '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
                ]
            },
            {
                id: 2,
                name: 'SAMSUNG Galaxy S23 5G (Cream, 128 GB)  (8 GB RAM)',
                price: '₹37,999',
                discount: '57% off',
                imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=70',
                specifications: [
                    '8 GB RAM | 128 GB ROM',
                    '15.49 cm (6.1 inch) Full HD+ Display',
                    '50MP + 10MP + 12MP | 12MP Front Camera',
                    '3900 mAh Lithium Ion Battery',
                    'Qualcomm Snapdragon 8 Gen 2 Processor',
                    '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories'
                ]
            },
            {
                id: 3,
                name: 'POCO C61 - Locked with Airtel Prepaid (Mystical Green, 64 GB)  (4 GB RAM)',
                price: '₹5,499',
                discount: '38% off',
                imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/n/9/-original-imah2qyrg2xryu8m.jpeg?q=70',
                specifications: [
                    '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
                    '17.04 cm (6.71 inch) HD+ Display',
                    '8MP Rear Camera | 5MP Front Camera',
                    '5000 mAh Battery',
                    'Helio G36 Processor',
                    '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
                ]
            },
            {
                id: 4,
                name: 'vivo T3 Lite 5G (Vibrant Green, 128 GB)  (4 GB RAM)',
                price: '₹10,499',
                discount: '27% off',
                imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/i/r/t3-lite-5g-v2356-vivo-original-imah27wmfgkergtx.jpeg?q=70',
                specifications: [
                    '4 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
                    '16.66 cm (6.56 inch) Display',
                    '50MP + 2MP | 8MP Front Camera',
                    '5000 mAh Battery',
                    'Dimensity 6300 Processor',
                    '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
                ]
            },
            {
                id: 5,
                name: 'Apple iPhone 15 Plus (Black, 128 GB)',
                price: '₹63,999',
                discount: '19% off',
                imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
                specifications: [
                    '128 GB ROM',
                    '17.02 cm (6.7 inch) Super Retina XDR Display',
                    '48MP + 12MP | 12MP Front Camera',
                    'A16 Bionic Chip, 6 Core Processor Processor',
                    '1 year warranty for phone and 1 year warranty for in Box Accessories.'
                ]
            },
           
    ]; 


   

    return [
        <div className="container mx-auto">
            {products.map((product, index) => (
                                  
                <div className="flex justify-around py-4 border-b-2 my-4">
                       {/* Image Section */}
                       <div className="flex justify-center w-1/4">
                       <img src={product.imgSrc} alt={product.name} className="h-64" />
                    </div>
                 {/* Name section */}

                 <div className="flex justify-center w-2/4">
                 <div>
                    <h1 className="text-center text-lg font-bold text-blue-500 cursor-pointer hover:underline"><Link to={`/product-details/${product.id}`}>{product.name}</Link></h1>

                    <ul className="mt-2">
                        <li>{product.specifications[0]}</li>
                        <li>{product.specifications[1]}</li>
                        <li>{product.specifications[2]}</li>
                        <li>{product.specifications[3]}</li>
                        <li>{product.specifications[4]}</li>
                        <li>{product.specifications[5]}</li>
                    </ul>
                    </div>
                 </div>
                       
                </div>
                
            ))}
        </div>
    ]
};
    export default Products;
