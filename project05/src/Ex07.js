import React from 'react'
import { useRef } from 'react'

const Ex07 = () => {



    /* 1) 사용자가  input  태그 안에 입력한 값을 가져오기
        2) 그 값에 따라서 사진의 src 속성을 변경하기
         
    */
        const imgRef = useRef();
        const textRef = useRef();

        const chImg = ()=>{
            textRef.current.value == '사나' ?
                imgRef.current.src ="https://i.namu.wiki/i/6KjOsibngJQukT6cL7zkn4KKsh7q0T--9US32xc1_IKB9T2Wh1IxNJH-4-e5rP7Pa_0Kc6SYCcCOsRBI7rpiow.gif"
                : imgRef.current.src = "https://i.namu.wiki/i/WDH8wxEwDZ6l7Clauna9UTWRhXrhF7gbZOXoOifeMjSKSBmYaCxyhsqI2CC7SDtHwUZ68iDmEQuSp2B9t60Hvw.gif"
        
                textRef.current.value =""
                textRef.current.focus()
            }
    /* const inputchange = ()=>{
        imgRef.current.src == "https://i.namu.wiki/i/WDH8wxEwDZ6l7Clauna9UTWRhXrhF7gbZOXoOifeMjSKSBmYaCxyhsqI2CC7SDtHwUZ68iDmEQuSp2B9t60Hvw.gif"
            ?  imgRef.current.src = "https://i.namu.wiki/i/6KjOsibngJQukT6cL7zkn4KKsh7q0T--9US32xc1_IKB9T2Wh1IxNJH-4-e5rP7Pa_0Kc6SYCcCOsRBI7rpiow.gif"
            :  imgRef.current.src = "https://i.namu.wiki/i/WDH8wxEwDZ6l7Clauna9UTWRhXrhF7gbZOXoOifeMjSKSBmYaCxyhsqI2CC7SDtHwUZ68iDmEQuSp2B9t60Hvw.gif"
    }

    const btnimg = ()=>{
        inputchange("https://i.namu.wiki/i/WDH8wxEwDZ6l7Clauna9UTWRhXrhF7gbZOXoOifeMjSKSBmYaCxyhsqI2CC7SDtHwUZ68iDmEQuSp2B9t60Hvw.gif")
    } */
    
  return (
    <div>
        <p>희망하는 사진이 있으신가요?</p>
        <input type="text" ref={textRef}/>
        <button onClick={chImg}>변경!</button>

        <div>
            <img ref={imgRef}
                src="https://i.namu.wiki/i/WDH8wxEwDZ6l7Clauna9UTWRhXrhF7gbZOXoOifeMjSKSBmYaCxyhsqI2CC7SDtHwUZ68iDmEQuSp2B9t60Hvw.gif"
                width='200px'></img>
        </div>
    </div>
  )
}

export default Ex07