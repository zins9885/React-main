import React, {Component} from 'react'

/* rcc : class component 생성하는 단축키

React Hook 이라는 기능들이 생겨나게 되면서
Function 컴포넌트에서 실행되지 않았던
리액트의 중요 오소들을 Function 컴포넌트에서 사용할 수 있게 되었다.

ex) LIfeCycle같은 중요한 개념을 Function Component 에서 사용할 수 없었음
    React Hook 이 생겨나게 되면서 이제는 Function Component 에서도
    LifeCycle을 사용할 수 있게 됨

    use~ :hook
    -useState, useRef, useContext ... etc
    

*/
/* const Ex01 = () => {
  return (
    <div>Ex01</div>
  )
} */

export default  class Ex01 extends Component{

    componentDidMount(){
        /* componentDidMount : 화면이 마운트됨(화면 렌더링이 완료됨)!
        화면을 먼저 띄우고 데이터를 가지고 옴(무거운 작업 시작)
        => API call(ajax, fetch, axios...)
        API : 프론트와 백이 주고받는 정보
        오픈API : 오픈공공데이터를 활용해 코드 짜기

        */
        console.log('3. componentDidmMount - 화면 렌더링 완료!');
    }

    componentDidUpdate(){
        /* 값이 변경되어 갱신이 일어난 직후에 호출! */
        console.log("값이 변경되었습니다!");
    }
    constructor(){
        console.log('1. constructor -최초생성');
        /* constructor : 생성자
        => state, 함수, 변수 ... 값들을 초기화할 때 사용
        => 화면이 렌더링 되기 이전, 가장 최초의 단계
        */
        super();
        this.state ={
            num : 0
        }
        // 사본함수를 만들어서 바인딩 해주는 작업
        this.handleIncrement =this.handleIncrement.bind(this)
        this.HandleDecrement =this.HandleDecrement.bind(this)
    }

    handleIncrement(){
        console.log('handle Increment Function');
        this.setState({
            num : this.state.num +=1
        })
    }
    HandleDecrement(){
        this.setState({
            num : this.state.num -=1
        })
    }

    render(){
        /* render : 화면을 렌더링 할 때
            => 화면을 구성하는 요소를 작성
            
            */
        console.log('2. render - 화면이 랜더링 되는 중...');
        return(
        <div>
            <h1>Class Component : {this.state.num}</h1>
            <button onClick={this.handleIncrement}>+1</button>
            <button onClick={this.HandleDecrement}>-1</button>
        </div>
        )
    }
}