import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProductList = (props) => {
    const { category } = props;
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        allProducts()
    },[]);

    const allProducts = () => {
        fetchProducts(category).then(res => {
            setProducts(res.data);
            console.log(res);
        }).catch(error => {
            console.error(error);
            toast.error("Something went wrong");
        })
    }
    console.log(props.user);
    const navigateToDetail = (product) => {
        navigate(`/product/${product?._id}`)
    }

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden"
                onClick={() => navigateToDetail(product)}>
                    <img src={product.image} alt={product.name} className="w-full h-56
                     object-cover" />
                    <div className="p-4 bg-[#F9E5C3]">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600 mt-1">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
