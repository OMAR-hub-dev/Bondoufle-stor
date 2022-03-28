
import './App.css';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import { useContext } from 'react';
import {Store} from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const {state} = useContext(Store);
  const {cart } = state;
  return (
    <BrowserRouter>
    <div className="App d-flex flex-column site-container">
      <header>
        <Navbar bg="warning" variant="dark">
          <Container >
            <LinkContainer to="/">
              <Navbar.Brand>Bondoufle store</Navbar.Brand>
            </LinkContainer>
            <Nav className='me-auto'>
                <Link to ='/cart' className='nav-link'>
                  Cart
                      {cart.cartItems.length > 0 && (
                        <Badge pill bg="danger">
                          {cart.cartItems.reduce((a,c)=> a+ c.quantity, 0)}
                        </Badge>
                      )}
                </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main className='mt-4'>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
          <Route path="/Signin" element={<SigninScreen/>}/>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
                 
      </main>
      <footer>
        <div className='text-center'> ALL Rights Reserverd </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
