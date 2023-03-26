import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { setProducts } from '../../app/productsSlice'
import { IProducts, IProductsResponse } from '../interfaces/interfaces'

import './products-list.css'

const ProductsList = () => {
    const dispatch = useDispatch()
    const test = useSelector((state: IProductsResponse) => state)

    React.useEffect(() => {
        axios.get('https://dummyjson.com/products').then((response) => {
            dispatch(setProducts(response.data.products))
        })
    }, [])



    const deleteProduct = (event: any) => {
        const productId = event.target.dataset.productId
        let afterDelete = test.counter.filteredProducts.filter((product: any) => product.id !== parseInt(productId));
        dispatch(setProducts(afterDelete))
    }




    return (
        <div className='container'>
            <div className="list">
                <h2 className='products-list'>Список товарoв</h2>
                <ul>
                    {test.counter.filteredProducts.map((item: any, key: number) => {
                        return (
                            <Link to={`/product/${item.id}`} className='product-item' key={key} style={{ backgroundImage: item.thumbnail ? `url(${item.thumbnail})` : 'url(https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg)' }} >
                                {item.brand}
                                <img src="https://cdn-icons-png.flaticon.com/512/491/491721.png" className='delete-product' onClick={()=>console.log('asa')} alt="" data-product-id={item.id} />
                            </Link>
                        )
                        
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProductsList