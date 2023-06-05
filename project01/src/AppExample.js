function AppExample(){
    /*
    (1) 사용자에게 이름을 입력받아준다 -prompt
    (2) 현재 날짜를 가지고 올 것
    (3) 조건에 따라 계절을 분류
        -3~5월 : 봄
        -6~8월 : 여름
        -9~11월 : 가을
        -12~2월 : 겨울
    (4)
    2023-05-15 =h1
    수평선
    xxx님 지금은 봄입니다. 좋은하루 보내세요!
    
    */
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    let a = today.toLocaleDateString();
    let weather = "";
    let input = prompt('이름을 입력해주세요');
    let Winput = prompt('월을 입력해주세요.');
    switch(parseInt(Winput)){
        case 3,4,5:
            weather = "봄";
            break;
        case 6,7,8:
            weather = "여름";
            break;
        case 9,10,11:
            weather = "가을";
            break;
        case 12,1,2:
            weather = "겨울";
            break;
        }
    
    return(
        <div>
            <h1>{a}</h1>
            <hr></hr>
            {input}님 지금은 {weather}입니다. 좋은 하루 보내세요!
            
        </div>


    )


}
export default AppExample;