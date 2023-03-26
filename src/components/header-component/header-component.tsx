import { Link } from 'react-router-dom'
import './header-component.css'

const HeaderComponent = () =>{
    return (
        <div className="header-main">
            <Link className='header-title' to={'/'}><h1 >Your favorite products</h1></Link>
        </div>
    )
}



export default HeaderComponent