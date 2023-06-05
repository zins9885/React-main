const MenuItem = ({name,price,menu})=>{

    /* 
        상위 컴포넌트에서 보낸 값을 하위 컴포넌트에서 받는 방법
        함수의 형태이기 때문에, 값은 매개변수를 통해 받는다.
        Case1. props => props.name

        Case2. {name} => name

        객체 비구조화 할당
        - 객체 안의 속성만 꺼내서 마치 변수인 것 처럼 사용할 수 있다.
        ex) let props = {name : 선영표, gender : '여성'}
            => let {name, gender} = {name : '선영표' , gender : '여성'}
            그 뒤로부터는 객체 안의 속성/값을 변수처럼 사용 가능

    */

    console.log('Apps.js에서 넘어온 값', name);
    return(
        
        <div className="item-border">
            <p>{name}</p>
            <p>{price}원</p>
            <h3>{menu}</h3>
        </div>


    )
}
export default MenuItem