
import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import ShopCategory from './pages/ShopCategory';
import menBanner from './images/dataImages/menBanner.webp';
import womenBanner from './images/dataImages/womenBanner.jpg';
import kidsBanner from './images/dataImages/kidsBanner.jpg';
import Login_Signup from './pages/loginSignup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<ShopCategory banner={menBanner} category='men'/>} />
          <Route path='/women' element={<ShopCategory banner={womenBanner} category='women'/>} />
          <Route path='/kids' element={<ShopCategory banner={kidsBanner} category='kids'/>} />

          <Route path='/product' element={<h1>product</h1>}>
            <Route path=':productId'element={<h1>productId</h1>}/>
          </Route>

          <Route path='/login' element={<Login_Signup/>} />
          <Route path='/cart' element={<h1>cart</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
