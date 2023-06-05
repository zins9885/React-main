import React from 'react'
import menu from './menu.json'
import MenuItemC from './components/Ex03MenuItemC'
import './App.css'

const Ex03 = () => {


    let menu1 = menu.list.map(item => <MenuItemC key={item.name} name={item.name} price={item.price} content={item.content} imgSrc={item.imgSrc}/>)

  return (
    
    <div>
        <h1>메뉴</h1>
        <div className='menu12'>
            {menu1}
        </div>

    </div>
  )
}

export default Ex03