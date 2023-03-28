import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import Main from "./pages/Main";
import View from "./pages/View";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product" element={<View />} />
      <Route path="/product/edit" element={<Edit />} />
    </Routes>
  );
};

export default App;
