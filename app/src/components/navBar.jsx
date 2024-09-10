import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/cla-logo.png'
import './barNav.css'
function barNav(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid >
        <Navbar.Brand href="#"><div className="contenedor-imagen"><img src={logo} alt="" /></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='hv' href="#action1">{props.text1}</Nav.Link>
            <Nav.Link className='hv' href="#action2">{props.text2}</Nav.Link>
            <NavDropdown className='hv' title={props.text3} id="navbarScrollingDropdown">
              <NavDropdown.Item className='hv' href="#action3">{props.text4}</NavDropdown.Item>
              <NavDropdown.Item className='hv' href="#action4">
                {props.text4}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='hv' href="#action5">
                {props.text5}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              {props.text6}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">{props.text7}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default barNav