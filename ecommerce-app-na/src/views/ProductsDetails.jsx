import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { productId } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null); // State to store product data

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = () => {
        fetch(`http://localhost:4000/products/${productId}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data); // Store product data in state
            })
            .catch(error => console.error("Error fetching product:", error));
    };

    // Display loading if data is not fetched yet
    if (!product) {
        return <h1 className="text-center text-gray-600 text-lg">Loading...</h1>;
    }

    return (
        <div className="flex my-5 px-4">
            {/* Product Image */}
            <div className="w-1/3">
                <img src={product.imgSrc} alt={product.name} className="w-full rounded-lg shadow-md" />
            </div>

            {/* Product Details */}
            <div className="w-2/3 px-6">
                <h1 className="text-3xl font-bold text-blue-500">{product.name}</h1>
                <p className="text-lg text-gray-700 mt-2">{product.description}</p>
                <p className="text-xl font-semibold text-green-600 mt-3">${product.price}</p>
            </div>
        </div>
    );
}

export default ProductDetails;
