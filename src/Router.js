import React from "react";
import { Routes, Route } from "react-router-dom";
import { Basket } from "./Pages/Basket/Basket";
import { Stakes } from "./Pages/Stakes/Stakes";
export function ApiRouter() {
  return (
    <Routes>
      <Route path="/" element={<Stakes />}></Route>
      <Route path="/basket" element={<Basket />}></Route>
    </Routes>
  );
}
