import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";

export default function App() {
  return (
  <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/service1" element={<Service1 />} />
        <Route path="/services/service2" element={<Service2 />} />
      </Routes>
      <Footer />
      </>
  );
}
