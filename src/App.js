import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./Components/Header/Header";
import ScrollToTop from "./Components/ScrollToTop";
import ParticleBg from "./Components/ParticleJS/ParticleBg";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Book from "./Pages/Book/Book";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ParticleBg />
      <div className="App">
        <ScrollToTop />
        <Header />
        {/* //comment */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Book" element={<Book />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
