import Carousel from 'react-bootstrap/Carousel';
import Product from './product';
import foto1 from '../img/Product1.png'
import foto2 from '../img/Product3.png'
import foto3 from '../img/Product4.png'
import Button from './button';
import './slider.css'
function slider() {
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item className='sld1'>
      <Product
        Secundario = "Computer And Laptop" 
        img = {foto1}
        Principal = "Accesories"
        loremp = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed magnam eligendi accusamus facilis? Aut dolor, laudantium quas incidunt labore, quasi sapiente eligendi voluptatibus accusantium dignissimos aperiam perspiciatis non, iste itaque."
      ></Product>
    </Carousel.Item>
    <Carousel.Item className='sld2'>
    <Product
        Secundario = "Poco F5 5G " 
        img = {foto2}
        Principal = "Cell Phones"
        loremp = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed magnam eligendi accusamus facilis? Aut dolor, laudantium quas incidunt labore, quasi sapiente eligendi voluptatibus accusantium dignissimos aperiam perspiciatis non, iste itaque."
      ></Product>
    </Carousel.Item>
    <Carousel.Item className='sld3'>
    <Product
        Secundario = "Galaxy Buds Pro" 
        img = {foto3}
        Principal = "Airpods"
        loremp = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed magnam eligendi accusamus facilis? Aut dolor, laudantium quas incidunt labore, quasi sapiente eligendi voluptatibus accusantium dignissimos aperiam perspiciatis non, iste itaque."
      ></Product>
    </Carousel.Item>
  </Carousel>
  )
}

export default slider