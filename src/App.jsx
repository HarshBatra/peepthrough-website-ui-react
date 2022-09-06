import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Cities from "./components/Cities";
import Retail from "./components/Retail";

import "./App.css";

const App = () => {
  return (
    <div className="layout">
      <Navbar />
      <Header />
      <Category />
      <Retail />
      <Cities />
      <Footer />
    </div>
  );
};

export default App;
