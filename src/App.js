import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import CartPage from './components/CartPage';
import ProductCard from './components/ProductCard';
const  App=()=> {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
