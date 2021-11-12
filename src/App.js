import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./Components/Header/Header";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Testimonials from "./Pages/Testimonials/Testimonials";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        {/* //comment */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Book" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
