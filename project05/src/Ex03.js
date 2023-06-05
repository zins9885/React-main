import React from 'react'
import Ex03Header from './components/Ex03Header'
import Ex03Main from './components/Ex03Main'
import { DarkContext } from './context/Ex03DarkContext'
import { useState } from 'react'

const Ex03 = ()=>{

  //어플리케이션의  Theme와 관련된 데이터
  // => 전역적으로 사용, 관리 =>  context
  const [isDark, setIsDark] = useState(false);
  
  return(
    <DarkContext.Provider value={{isDark, setIsDark}}>
      <div>
        <Ex03Header/>
        <Ex03Main/>  
      </div>
    </DarkContext.Provider>
  )
}

export default Ex03



// const Ex03 = () => {

//   const [darkColor, setDarkColor] = useState("white");
//   const [TextColor, setTextColor] = useState("black");
//   const [IsDark, setIsDark] = useState(false)
//   return (
    
//     <div style={{
//       backgroundColor : `${darkColor}`,
//       color : `${TextColor}`
      
//     }}>
//       <DarkContext.Provider value={{IsDark, setIsDark, setDarkColor, setTextColor}}>
//         <Ex03Header/>
//         <Ex03Main/>
//       </DarkContext.Provider>
        
//     </div>
    
    
//   )
// }