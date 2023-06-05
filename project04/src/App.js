import logo from './logo.svg';
import './App.css';

function App() {

  let students =[
    {name : '차은우', age : 26, gender : 'man'},
    {name : '장원영', age : 26, gender : 'woman'},
    
  ];
  
  /* Map 함수
     주어진 함수를 호출한 결과를 모아 새로운 함수를 만든다
     ex) students라는 배열의 이름만 뽑아서 새로운 함수를 만들고싶어!
     - 기존 배열은 영향을 받지 않는다
     -key 값을 꼭 작성해야 한다.
     이 때, key값은 서로 중복되면 안된다 고유한 값!

  */
  let newStudents = students.map(item => <button key={item.name}>{item.name}</button>);
  console.log('new : ', newStudents);

  // let a = students.map(item => <p key={item.name}>안녕하세요 저는 {item.name}입니다. 제 나이는{item.age}입니다.</p> )

  /* 간단한 예제!
    안녕하세요 저는 차은우 입니다. 제 나이는 26살입니다.
    안녕하세요 저는 류승범 입니다. 제 나이는 26살입니다.
    =>p태그로 화면에 출력
  */

    //================================ Filter ============================
    let womanList =students.filter(item => item.gender =='woman')
    console.log('woman List :', womanList);



  return (
    <div>

    <h2>Map 함수</h2>
    {newStudents}
      {students.map(item => <p key={item.name}>안녕하세요 저는 {item.name}입니다. 제 나이는 {item.age}입니다.</p>)}
    

    <hr/>
    <h2>Filter함수</h2>
    {womanList.map(item => <p key={item.name} >{item.name}이구요, {item.age}살입니다.</p>)}
    {/* filter함수는 배열의 각 요소에 대해서 주어진 함수의 결과 값이 true인
      요소들만 모아서 새로운 배열로 반환하는 함수를 의미한다. 
    */}

    
    
    </div>



  );
  }

export default App;
