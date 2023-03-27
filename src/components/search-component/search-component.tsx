import axios from 'axios'
import React, { HTMLInputTypeAttribute } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, setFilteredProducts } from '../../app/productsSlice'
import { IProducts, IProductsResponse } from '../interfaces/interfaces'
import './search-component.css'

const SearchComponent = () => {
    const [filterValue,setFilterValue] = React.useState<string>('')
    const storeProducts = useSelector((state:IProductsResponse)=> state)
    const dispatch = useDispatch()

    const filterChange = (filterText:React.ChangeEvent<HTMLInputElement>) =>{
        setFilterValue(filterText.target.value)
        dispatch(setFilteredProducts(searchChange(filterText.target.value)))
    }
    
    const searchChange = (searchText:string):IProducts[] =>{
        return storeProducts.products.allProducts.filter((product:any) => {
            return (
              product.title.toLowerCase().includes(searchText.toLowerCase()) ||
              product.category.toLowerCase().includes(searchText.toLowerCase())
            );
          });
          
    }


    

    


    return (
        <div className='container'>
            <div className='search-wrapper'>
                <input className="search-input" type="text" placeholder="Enter product name or category" onChange={filterChange}  />
            </div>
        </div>

    )
}

export default SearchComponent