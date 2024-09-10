import BarNav from './components/navBar'
import Slider from './components/slider'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <>
    <div className="principal">
      <div className='BarraNavegacion'><BarNav
      text1 = "Home"
      text2 = "About"
      text3 = "Products"
      text4 = "Cell Phone"
      text5 = "Tablets"
      text6 = "contact"
      text7 = "Search"
      ></BarNav></div>
      <div className="slider"><Slider></Slider></div>
      </div>
    </>
  )
}

export default App
