import Carousel from 'react-bootstrap/Carousel';
import Button from './button';

function product(props) {
  return (
    <div className='PP'>
    <img
        className="d-block"
        src= {props.img}
        alt="First slide"
      />
      <Carousel.Caption>
        <div className="contenedor-text">
          <h3>{props.Secundario}</h3>
          <h1>{props.Principal}</h1>
        <p>{props.loremp}</p>
        </div>
      </Carousel.Caption>
      <div className="btns">
        <Button
        text = "Buy Now"></Button>
        <Button
        text = "Contact"></Button>
      </div>
      </div>
  )
}

export default product