import logo from '../assets/logo.png'
import '../styles/Banner.css'

export default function Banner() {
    // const title = 'Oh My Cream'
    return (
        <div className='banner'>
            <img src={logo} alt='Oh My Cream logo' className='logo' />
            {/* <h1 className='title'>{title}</h1> */}
        </div>
    )
}