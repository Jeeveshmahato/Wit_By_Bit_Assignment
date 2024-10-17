import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Stores from './Pages/Stores';
import Products from './Pages/Products';
import Settings from './Pages/Settings';
import AddProduct from './Pages/AddProduct';
import AddProductVariants from './Pages/ViewProduct';
import Combinations from './Pages/Combinations';
import Price from './Pages/PriceInfo';

const App = () => {
  return (
    <Router>
      <div className="flex h-[100vh] font-work-sans">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8 h-full bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/AddProducts" element={<AddProduct />} />
            <Route path="/ViewProducts" element={< AddProductVariants />} />
            <Route path="/Combinations" element={< Combinations />} />
            <Route path="/Price" element={< Price />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
