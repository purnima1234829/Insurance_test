import Nav from './components/Nav';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Insurance from './components/Commercial';
import ProductList from './components/ProductList';
import Mainpage from './components/Home';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<Insurance/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/mainpage' element={<Mainpage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
