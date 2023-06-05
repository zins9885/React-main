import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item, idx }) => {
  /* 
    Mission!
    1. 누군가가 item을 선택했을 때, 해당 아이템에 대한 productDetail로 이동
        => 상품별로 고유번호 '/detail/1' ,'/detail/2' 이런식으로 이동
        이거는 navigate 써야되는거 아닌가?
        상품을 누를때마다 고유번호까지 같이 넘겨주기
        useParams써버 고유번호 넘기기
    
    */
   console.log(item, idx);
  const nav = useNavigate();
  const getDetail = () => {
    nav(`/ProductDetail/${idx}`);
  };

  return (
    <div className="product-container" onClick={getDetail}>
      <img src={item.src} width="100px" />
      <p>{item.title}</p>
      <p>{item.price}원</p>
    </div>
  );
};

export default ProductItem;
