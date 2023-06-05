import React, { useEffect, useState } from 'react'
import './Ex05.css'
import axios from 'axios';
const Ex05 = () => {
    // key : d98ae2c3057b1f588501393dc077fc5f
    

    let cityList = ['gwangju', 'seoul', 'busan', 'jeju'];
    const[city, setCity] =useState('gwangju');
    const[temp, setTemp] = useState("0");
    const[icon, setIcon] = useState("");
    const[cloud, setCloud] = useState("");
    const getCity = (e)=>{
        console.log('get City',e.target.innerText);
        setCity(e.target.innerText);
        

    }
    const getData = ()=>{
        console.log('get Data');
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d98ae2c3057b1f588501393dc077fc5f`
        axios.get(url)
        .then(res =>{
            console.log('res :',res.data.main.temp)
            //온도 세팅 : 켈빈온도 -273 = 섭씨온도
            setTemp((res.data.main.temp-273).toFixed(1));

            //구름 세팅
            if(res.data.clouds.all >90){
                setCloud("매우 흐림");

            }
            else if(res.data.clouds.all >60){
                setCloud("흐림");
            }
            else{
                setCloud("맑음");
            }

            

            //아이콘 세팅
        
        setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
        })

        
        

    }

    /* 임시 코드 
    
    Mission!
    - 버튼을 클릭 했을 때 해당 도시로 날씨 데이터가 변경되도록 해보자.
    1. 버튼을 클릭 했을 때 => getCity 라는 함수 => city의 이름ㅇ르 setting

    2. city의 이름이 변했을 때, city에 맞는 데이터가 들어오도록
    3. 단, 아무것도 클릭하지 않고 단순히 화면이 뜬 상태라면 gwangju의 데이터를 받아오기
    
    
    */


    useEffect(()=>{
        getData();
        
    },[city])

  return (
    <div className='weather-container'>
        <div className='weather-item'>
            <h1>날씨바라</h1>
            <div className='weather-data'>
                <img src={icon} width='100px'></img>
                <h1>{temp}℃</h1>
                <h3>{city}</h3>
                <h4>{cloud}</h4>
            
            </div>
            <div className='button-container'>
                {cityList.map(item => <button key={item} onClick={getCity}>{item}</button>)}
            </div>
        </div>
    </div>
  )
}

export default Ex05