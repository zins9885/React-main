import React from 'react'
import Ex04List from './components/Ex04List'
import Ex04AddTodo from './components/Ex04AddTodo'
import { useState } from 'react'
import { TodoContext } from './context/Ex04TodoContext'

/* 
    [에러 읽어보기!]
    
    useState is not defined 
    useContext is not defined 
    =>  import 안해줘서 나는 오류 

    ck is no defined 
    => ck 라는 함수, 혹은 변수를 설정하지 X 
    
    React Hook "useState" cannot be called at the top level. 
    => use ~ 리액트 훅은 반드시 컴포넌트 내에 작성

    Mission 2. 할일 추가해보기 
- AddTodo 에 할일을 입력하고 버튼 클릭 시 배열안에 새로운 값이 들어가게 된다 
- handleNewTodo 라는 함수를 생성 -> 전역적으로 관리 필요 
   => newTodo에 새로운 값을 세팅 

- handleTodoAddition 이라는 함수를 생성 
   => 기존에 있던 todos 에 newTodos 라는 값을 추가 
   => ** state를 누적시키는 방법! 
   => const [txt, setTxt] = useState("하이") 
      Q. 하이 => 바이 
      setTxt("바이"); 
      
      Q. 하이 => 하이하이 
      setTxt([...txt, "하이"]) 

   => 기존에 있던 todos에 newTodo 를 더해보면? 
   setTodos([...todos, {text : newTodo , completed : false }])
*/
const Ex04 = () => {
    const [todos, setTodos] =useState([
        {text : 'React 복습하기', completed : false},
        {text : 'Spring 복습하기', completed : false}
    ]);
    const [newTodo, setNewTodo] = useState("");

    // newTodo에 값을 추가하는 함수
    const handleNewTodo = (e)=>{
        // console.log('handleNewTodo Function', e.target.value);
        setNewTodo(e.target.value);
    }

    // 기존 todos 배열에 새로운 할일을 추가하는 함수
    const handleTodoAddition = ()=>{
        console.log('handleTodoAddition Function');
        console.log('newTodo', newTodo);
        setTodos([...todos, 
            {text : newTodo, completed : false}])
        setNewTodo("")
    }
    /* 마친 일을 체크해주는 함수 */
    const handleTodoToggle = (index)=>{
        const newTodos = [...todos];
        newTodos[index].completed = ! newTodos[index].completed;
        setTodos(newTodos);
        
    }
    /* 삭제하는 함수 */
    const handleTodoDelete = (index)=>{
        const newTodos =[...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
        
    }

  return (
    <TodoContext.Provider value={{todos, setTodos,newTodo, setNewTodo, handleNewTodo,handleTodoAddition,handleTodoToggle, handleTodoDelete }}>
        <div>
            <h1>Todo List</h1>
            <Ex04List/>
            <Ex04AddTodo/>
        </div>
    </TodoContext.Provider>
  )
}

export default Ex04