import React from 'react'

const Ex03MenuItemC = ({name, price, content, imgSrc}) => {
  return (
    <div>
        <img src={imgSrc} width="200px"/>
        <p>
            <span>{name}</span>{" "}
            <span> {price}원 </span>
        </p>
        
        <p> {content} </p>

    </div>
  )
}

export default Ex03MenuItemC