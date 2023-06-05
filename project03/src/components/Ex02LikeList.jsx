import React, { useState } from 'react';

const Ex02LikeList = () => {

    const [number, setNumber] = useState(0);
    const [like, setLike] =useState("🤍");

    const handleLike = ()=>{
        
        setNumber(number+1);
        setLike("❤");
        if(like == "❤"){
            setNumber(number-1);
            setLike("🤍");
        }
    }
  return (
    <div>
        <span onClick={handleLike}>{like}</span>{" "}
        <span>좋아요 {number}개</span>
    </div>
  )

}

export default Ex02LikeList