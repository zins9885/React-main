import React from 'react'
import menu from './menu.json'
import MenuItem from './components/Ex02MenuItem'
const Ex02 = () => {
    console.log('menu :',  menu.list)

    // let listmenu = menu.list.map(item => <MenuItem key={item.name}>{item.name}{item.price}</MenuItem>);
  return (
    <div>
        <MenuItem  name={menu.list[0].name} price={menu.list[0].price} content={menu.list[0].content} imgSrc={menu.list[0].imgSrc}/>
        <MenuItem  name={menu.list[1].name} price={menu.list[1].price} content={menu.list[1].content} imgSrc={menu.list[1].imgSrc}/>
        <MenuItem  name={menu.list[2].name} price={menu.list[2].price} content={menu.list[2].content} imgSrc={menu.list[2].imgSrc}/>
        

    </div>
  )
}

export default Ex02