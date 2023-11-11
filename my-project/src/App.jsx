
import "./App.scss";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import BlogDetails from "./Components/Blog/BlogDetails";


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails/:postId" element={<BlogDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
