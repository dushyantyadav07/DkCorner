 import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import OurStore from './Pages/OurStore';
import BlogCard from './Components/BlogCard';
import Meta from './Components/Meta';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Blog from './Pages/Blog';
import SingleBlog from './Pages/SingleBlog';
import Signup from './Pages/Signup';
import Forgotpassword from './Pages/Forgotpassword';
import Resetpassword from './Pages/Resetpassword';
import CompareProduct from './Pages/CompareProduct';
import SingleProduct from './Pages/SingleProduct';
import TermAndContions from './Pages/TermAndConditions';
 
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element ={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/refund-policy' element = {<RefundPolicy />}/>
          <Route path='/shipping-policy' element = {<ShippingPolicy/>}/>
          <Route path="product" element={<OurStore />} />
          <Route path="product" element={<BlogCard />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword/>} />
            <Route path="term-conditions" element={<TermAndContions />} />



        </Route>
        
      </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
