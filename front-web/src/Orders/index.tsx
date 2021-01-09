import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList'
import StepsHeader from './StepsHeaders'
import './styles.css'
import { OrderLocationData, Product } from './types';

function Orders() {

    const[products, setProducts] = useState<Product[]>([]);
    const[orderLocationData, setOrderLocationData] = useState<OrderLocationData>();
    console.log(products)

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    },[])

    return(
        <div className="orders=container">
            <StepsHeader />
            <ProductList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocationData(location)} />
        </div>
    )
} 

export default Orders