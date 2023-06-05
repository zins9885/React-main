import React from 'react'
import menu from "./menu.json"
import MenuItem from './components/Ex02MenuItemB'
import './App.css'
import { useState } from 'react'

const Ex02B = () => {
    console.log('menu :', menu.list)

    let a = menu.list.filter(item=>item.price >=4200)
    const [water, setWater] = useState("");


    const btn =()=>{
      let code = a.map(item=> <MenuItem key={item.name} name={item.name}
        price={item.price} content={item.content} imgSrc={item.imgSrc} />);
      setWater(code);
        
    }


  return (

    <div>

      <h1>전체메뉴</h1>
      <div className='menu-container'>
        {menu.list.map(item =><MenuItem key={item.name} name={item.name}
        price={item.price} content={item.content} imgSrc={item.imgSrc} />)}
      </div>

      <h1>4200원보다 비싼 메뉴들</h1>
      <div>

        {/* 문제 풀이
        메뉴의 가격이 4200원 이상인 메뉴만 보여주세요
        사진, 제목, 가격, 내용이 뜨도록 */}

        <button onClick={btn}>나오기</button>
        {water}
        
      </div>
    </div>

  )
}

export default Ex02B