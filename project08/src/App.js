import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import ProductItem from "./components/ProductItem";
import Storage from "./components/Storage";

function App() {
  /* 
  미션 수행 순서
  1) Route 처리
  -BrowserRouter, Routes, Route ...etc
  -import export
  
  2)App.js에 list state관리해주기
  -tip! 함수 또한 props로 보낼 수 있다는 것을 명심!
  ex) const[list, setList] = useState([])
    ...
    <Main list={list} setList={setList}/> 뭔소리지?

  3)Header Mission
  4)Product List Mission
  5)Product Item Mission
  6)Product Detail Mission
  */

  const [list, setList] = useState([]);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/ProductList"
          element={<ProductList list={list} setList={setList} />}
        />
        <Route
          path="/ProductDetail/:num"
          element={<ProductDetail list={list} />}
        />
        <Route path="/storage" element={<Storage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
