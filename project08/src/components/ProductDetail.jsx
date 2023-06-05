import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = ({ list}) => {
  /* 
  useParams()
  -url 의 파라미터 정보를 가져올 수 있는 React Hook
  -보통 물품의 교유한 ID값을 설정하는데 적합하다.
  -한가지 정보만 사용 가능

  a.<Route path="/경로이름:파라미터정보"><Route>
  b. 경로에 해당하는 컴포넌트
    1) import useParams from ~~
    2) let {파라미더정보} = useParams()
  */

  let {num} = useParams();
  if(list[num].delivery === "free"){
    list[num].delivery = "배송비 :무료";
  }
  else{
    list[num].delivery = `배송비 : ${list[num].delivery}원`
  }
  // {list[num].delivery == 'free' ? <span>배송비 무료</span> : <span>배송비 {list[num].delivery}원</span>}
  return (
  <div className="list-container">
    <div className="detail-item">
    <img src={list[num].src} alt="" width="200px" />
    <h3>{list[num].title}</h3>
    <p>
      
      <span>{list[num].price}원</span>{" "}
      <br />
      {/* 만약 배송비가 무료라면 '배송비 무료!' 라고 띄워주고
        배송비가 유료라면 '배송비 3000원'으로 띄워주기
      */}
      <span>{list[num].delivery}</span>

    </p>
    <br />
    <Link to="/ProductList">목록으로 돌아가기</Link>

    </div>
  </div>
  );
};

export default ProductDetail;
