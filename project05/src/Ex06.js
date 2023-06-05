import React from 'react'
import { useRef } from 'react'

const Ex06 = () => {

    let pdfStyle= {
        width : '100%',
        height : '90%'
    }

    const divRef = useRef();

    const changepdf = ()=>{
        
        divRef.current.src == "http://localhost:3000/pdf/pdf1.pdf"
            ? divRef.current.src = "/pdf/pdf2.pdf"
            : divRef.current.src ="/pdf/pdf1.pdf"
    }

    const btnch = ()=>{
        
        changepdf("/pdf/pdf2.pdf")
    }


  return (
    <div style={{height : '100vh' }} >
        <h3>오늘의 학습자료
            <button onClick={btnch} >변경</button>

        </h3>
        <iframe  style={pdfStyle} src="/pdf/pdf1.pdf" ref={divRef}></iframe>
        
    </div>
  )
}

export default Ex06