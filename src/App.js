import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import Cart from "./screens/Cart";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";


function App() {
  return (
    <BrowserRouter>
      <div className="inner-container d-flex flex-column">
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/signup" element={<SignUpPage/>} />
              <Route path="/cart" element={<Cart/>} />
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
