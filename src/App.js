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
    setCart([...cart, book])
  }
  useEffect(() => {
    console.log(cart)
  }, [cart])

  //   const dupeItem = cart.find(item => +item.id === +book.id)
  //  if (dupeItem) {
  //   setCart(cart.map(item => {
  //     if (item.id === dupeItem.id) {
  //       return {
  //         ...item,
  //         quantity: item.quantity +1,
  //       }
  //     }
  //     else {
  //       return item
  //     }
  //   }))
  //  }
  //  else {
  //   setCart([...cart, {...book, quantity: 1}])
  //  }
  // }
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart])

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
          <Route path="/cart" element={<Cart books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
