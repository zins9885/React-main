import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

const ProductList = ({ list, setList }) => {
  /*
    중요! 
    Mission!
    1) public  안에 두었던 bestList.json 값을 가지고 올 것
        => axios 이용, useEffect 이용, useState 배열 이용
    2) 가지고온 데이터를 state값 관리
        =>map함수, 가지고온 item값을 props로 처리 (index값도 : 인덱스 값을 useParams로 넣어줘야되기 떄문에)
    */

  // const getData = () => {
  //   axios.get("/bestList.json").then((res) => setList(res.data.list));
  // };

  useEffect(() => {
    axios.get("http://localhost:3000/bestList.json").then((res) =>{
      setList(res.data.list);
    } );
  },[]);

  return (
    <div className="list-container">
      {/* {list.map((item) => (
        <ProductItem item={item} index={item.no} />
      ))} */}
      {list.map((item,idx)=>(
        <ProductItem key={item.no} item={item} idx={idx} />
      ))}
    </div>
  );
};

export default ProductList;
