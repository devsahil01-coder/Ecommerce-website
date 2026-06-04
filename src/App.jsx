import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Categories from "./Components/Category/Category";
import FeaturedProducts from "./Components/Products/Products";
import Benefits from "./Components/Benefits/Benefits";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import CartDrawer from "./Components/Cart/Cart";

const App = () => {
const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("all");
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      {/* Header ALWAYS visible */}
      <Header
        search={search}
        setSearch={setSearch}
        setIsCartOpen={setIsCartOpen}
      />

      
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

     
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Hero />

              <Categories setSelectedCategory={setSelectedCategory} />

              <FeaturedProducts
                search={search}
                selectedCategory={selectedCategory}
              />

              <Benefits />
              <Newsletter />
            </>
          }
        />

        
        <Route
          path="/shop"
          element={
            <FeaturedProducts
              search={search}
              selectedCategory={selectedCategory}
            />
          }
        />

        
        <Route
          path="/categories"
          element={<Categories setSelectedCategory={setSelectedCategory} />}
        />

    
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
