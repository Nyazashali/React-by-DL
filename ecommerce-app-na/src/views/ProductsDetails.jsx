import { useParams, useSearchParams } from 'react-router-dom';

function ProductDetails() {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

   console.log(params);
}

export default ProductDetails;