import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IProducts, IProductsResponse } from '../interfaces/interfaces';
import './selected-product.css'
const SelectedProduct = () =>{
    const { id } = useParams();
    const test = useSelector((state:IProductsResponse)=>state)
   const product = test.counter.filteredProducts.find((item:any)=> {
        if(id && item.id === parseInt(id)){
            return item
        }
    })
    const [selectedImage, setSelectedImage] = useState(product.thumbnail);

  const handleImageClick = (image:any) => {
    setSelectedImage(image);
  };
    return (
        <div className='container'>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>{product.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <img src={selectedImage} alt={product.title} style={{width:'100%',height:500}} />
            </td>
          </tr>
          <tr>
            <td>Brand:</td>
            <td>{product.brand}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>{product.category}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{product.description}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>{product.price}$</td>
          </tr>
          <tr>
            <td>Stock:</td>
            <td>{product.stock}</td>
          </tr>
          <tr>
            <td>Rating:</td>
            <td>{product.rating} / 5</td>
          </tr>
          <tr>
            <td>Discount:</td>
            <td>{product.discountPercentage}% off</td>
          </tr>
        </tbody>
      </table>
      <div className='product-images'>
        {product.images.map((image:any, index:number) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={selectedImage === image ? 'selected' : ''}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};
        

export default SelectedProduct