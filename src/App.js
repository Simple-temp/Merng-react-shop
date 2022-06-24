import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import AdminAddCourse from "./screens/AdminAddCourse";
import AdminAllCourse from "./screens/AdminAllCourse";
import AdminAllUser from "./screens/AdminAllUser";
import AdminCOurseEdit from "./screens/AdminCOurseEdit";
import AdminDashBoard from "./screens/AdminDashBoard";
import AdminList from "./screens/AdminList";
import AllOrders from "./screens/AllOrders";
import Cart from "./screens/Cart";
import CourseDetails from "./screens/CourseDetails";
import LoginPage from "./screens/LoginPage";
import NewPassword from "./screens/NewPassword";
import OrderDetails from "./screens/OrderDetails";
import PaymentMethod from "./screens/PaymentMethod";
import PlaceOrder from "./screens/PlaceOrder";
import PrivateRoute from "./screens/PrivateRoute";
import SignUpPage from "./screens/SignUpPage";
import UpdateProfile from "./screens/UpdateProfile";
import UserOrderHistory from "./screens/UserOrderHistory";


function App() {
  return (
    <BrowserRouter>
    <ToastContainer limit={1} position="top-right" />
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
              <Route path="/updateprofile" element={<UpdateProfile/>} />
              <Route path="/userorderhistory" element={<UserOrderHistory/>} />
              <Route path="/course/:id" element={<CourseDetails/>} />
              <Route path="/payment" element={ <PrivateRoute>
                <PaymentMethod/>
              </PrivateRoute>} />
              <Route path="/placeorder" element={<PlaceOrder/>} />
              <Route path="/order/:id" element={<OrderDetails/>} />
              <Route path="/newpassword" element={<NewPassword/>} />

              {/* Admin Routes */}

              <Route path="/admin/dashboard" element={<AdminDashBoard/>} />
              <Route path="/admin/profile" element={<UpdateProfile/>} />
              <Route path="/admin/user" element={<AdminAllUser/>} />
              <Route path="/admin/course" element={<AdminAllCourse/>} />
              <Route path="/admin/orders" element={<AllOrders/>} />
              <Route path="/admin/adminlist" element={<AdminList/>} />
              <Route path="/admin/courseedit" element={<AdminCOurseEdit/>} />
              <Route path="/admin/courseedit/:id" element={<AdminCOurseEdit/>} />
              <Route path="/admin/addcourse" element={<AdminAddCourse/>} />
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
