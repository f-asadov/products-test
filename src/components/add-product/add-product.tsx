import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredProducts } from '../../app/productsSlice'
import { INewProduct, IProductsResponse } from '../interfaces/interfaces'
import * as Yup from 'yup';
import './add-product.css'

const AddProduct = () => {
    const [active, setActive] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [rating, setRating] = useState<number>(0)
    const [buttonState,setButtonState] = useState<boolean>(true)
    const test = useSelector((state: IProductsResponse) => state)
    const dispatch = useDispatch()

    const productParam = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.name === 'title') {
            setTitle(event.target.value)
        }
        else if (event.target.name === 'author') {
            setAuthor(event.target.value)
        }
        else if (event.target.name === 'date') {
            setDate(event.target.value)
        }
        else {
            setRating(parseInt(event.target.value))
        }

        if( title !== '' || author !== '' || date !== ''){
            setButtonState(false)
            console.log('1')
        }
        else{
            setButtonState(true)
        }
    }



    const addProduct = () => {
        let newProduct = {
            title,
            brand:'Test',
            category:'Test',
            description:'Test',
            discountPercentage:'discountPercentage',
            images:['1,2,3'],
            price:999,
            stock:55,
            author,
            date,
            rating,
            thumbnail:'https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg',
            id: Math.floor(Math.random() * (100 - 30 + 1)) + 30
            
        }
        dispatch(setFilteredProducts([...test.counter.filteredProducts, newProduct]))
        setTitle('')
        setAuthor('')
        setDate('')
        setRating(0)
        setActive(false)
        console.log(test.counter.filteredProducts)
    }

    const validationSchema = Yup.object({
        
        title: Yup.string().required('Title is requiered'),
        author: Yup.string().required('Author is Required'),
        date: Yup.date().required('Date is Required'),
        rating: Yup.number().min(0, 'Rating must be at least 0').max(10, 'Rating cannot be more than 10')
      });

    return (
        <div className='container'>
            <button className='add-product' onClick={() => setActive(true)}>Add Product</button>
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <img src="https://www.svgrepo.com/show/486564/cancel.svg" className='cancel' onClick={() => setActive(false)} alt="" />
                    <div className='form'>
                        <Formik
                            initialValues={{
                                title: '',
                                author: '',
                                date: '',
                                rating: 0
                            }}
                            onSubmit={values => console.log('adas')}
        
                            validationSchema={validationSchema}
                        >
                            <Form className='form'>
                                <Field id="title" name="title" onKeyUp={productParam} />
                                <ErrorMessage name="title"/>
                                <Field id="author" name="author" placeholder="Doe" onKeyUp={productParam} />
                                <ErrorMessage name='author'/>
                                <Field id="date" name="date" type="date" onKeyUp={productParam} />
                                <ErrorMessage name='date'/>
                                <Field id='rating' name='rating' type='number' onKeyUp={productParam} />
                                <ErrorMessage name='rating'/>
                                <button className={buttonState ? 'submit' : 'submit-active' } type='submit' disabled={buttonState} onClick={addProduct} >Sumbit</button>
                            </Form>
                        </Formik>
                        
                    </div>


                </div>
            </div>
        </div>

    )

}



export default AddProduct