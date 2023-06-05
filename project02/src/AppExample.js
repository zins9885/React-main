// rafce + Enter

import './App.css';
import React from 'react'
import MemberBox from './components/MemberBox'

const AppExample = () => {

    /*
        여러분의 팀원을 소개해주세요!
        이름 : 홍길동
        성별 : 여성/ 남성
        좋아하는 노래 : 아이브 - Kitsch

        단, Component와 props의 개념을 이용할 것
        -MemberBox 라는 컴포넌트를 생성하기

    */
//    let man = "남성"
//    let woman = "여성"
        // =
    let {man, woman} ={
        man : '남성',
        woman : '여성'
    }
  return (
    <div>
        <MemberBox  name="양수진" gender={woman} song="" ></MemberBox>
        <MemberBox  name="임혜주" gender={woman} song="레드벨벳 - 러시안룰렛" ></MemberBox>
        <MemberBox  name="김수연" gender={woman} song="stayc - teddy bear" ></MemberBox>
        <MemberBox  name="이현성" gender={man} song="Radiohead - Creep" ></MemberBox>
        <MemberBox  name="천현민" gender={man} song="아이브- Kitsch" ></MemberBox>

    </div>
  )
}

export default AppExample