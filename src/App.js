import './index.css';
import Nav from './components/Nav';
import React, {useState, useEffect} from 'react';
import Highlight from './components/ui/Highlight';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import {books} from './data';
import BookInfo from './pages/BooksInfo';
import Cart from './pages/Cart';


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
      setCart(
        cart.map((item) => 
          item.id === book.id
            ? {
                ...item,
                quantity: +quantity,
              }
              : item
          )
      );
    }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} cart={cart} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} books={books} changeQuantity={changeQuantity} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
