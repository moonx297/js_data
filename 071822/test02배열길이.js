// 배열의 길이 구하기
const ship={
    max: 4,
    passengers: [],
    onBoard: function(name){
        if (this.passengers.length === 4) {     //= 대입 연산 == 비교 연산 === 속성까지 비교
            console.log(`배의 정원이 가득참. ${name} 님은 배에 승선할 수 없습니다.` );
        } else {
            this.passengers .push(name);
            console.log(`${name} board`);   //em문자 --> 백틱
        }
    }
}
ship.onBoard('말자');
ship.onBoard('영자');
ship.onBoard('순자');
ship.onBoard('공자');
ship.onBoard('희인');
console.log(ship.passengers);