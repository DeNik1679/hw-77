import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Cart, Category, Detail, Home } from './pages';
import './app.css'
import { Header } from './components';
import { useEffect, useState } from 'react';

function App() {

  const [cart, setCart] = useState(localStorage.getItem('carts') 
  ? JSON.parse(localStorage.getItem('carts')) : []);
  console.log(cart);
  
  const addCart = (obj) => {
    const ind = cart.findIndex((elem) => {
        return elem.id === obj.id
    })

    if(ind < 0){
      setCart([{
        ...obj,
        cont: 1,
      }, ...cart])
    }else{
      cart[ind].cont += 1
      setCart([...cart])
    }
  }

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(cart));
  }, [cart])

  return (
    <Router>
      
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail  addCart={addCart} />}/>
        <Route path='/category' element={<Category addCart={addCart} />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
      </Routes>
      
    </Router>
  );
}

export default App;
