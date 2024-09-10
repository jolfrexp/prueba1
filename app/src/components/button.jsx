import Button from 'react-bootstrap/Button';
import './button.css'

function button(props) {
  return (
    <>
    <Button variant="outline-secondary" className='btn'>{props.text}</Button>{' '}
    </>
  )
}

export default button