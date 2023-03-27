import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { setProducts } from '../../app/productsSlice'
import { IProducts, IProductsResponse } from '../interfaces/interfaces'

import './products-list.css'

const ProductsList = () => {
    const dispatch = useDispatch()
    const storeProducts = useSelector((state: IProductsResponse) => state)

    React.useEffect(() => {
        axios.get('https://dummyjson.com/products').then((response) => {
            dispatch(setProducts(response.data.products))
        })
    }, [])



    const deleteProduct = (event: any) => {
        const productId = event.target.dataset.productId
        let afterDelete = storeProducts.products.filteredProducts.filter((product: IProducts) => product.id !== parseInt(productId));
        dispatch(setProducts(afterDelete))
    }



    return (
        <div className='container'>
            <div className="list">
                <h2 className='products-list'>Список товарoв</h2>
                <ul>
                    {storeProducts.products.filteredProducts.map((item: IProducts, key: number) => {
                        return (
                            <div className='product-wrapper' style={{ backgroundImage: item.thumbnail ? `url(${item.thumbnail})` : 'url(https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg)' }}>
                                <Link to={`/product/${item.id}`} className='product-item' key={key} >
                                    {item.brand}
                                </Link>
                                <img src="https://cdn-icons-png.flaticon.com/512/491/491721.png" className='delete-product' alt="" onClick={deleteProduct} data-product-id={item.id} />
                            </div>

                        )

                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProductsList