//배열 요소 일괄 변경하기
const arr = [
    {id : 0, name : '혜림', age : 6},
    {id : 1, name : '현일', age : 3},
    {id : 2, name : '희인', age : 5},
    {id : 3, name : '한일', age : 1}
]

//maping은 for문을 돌리지 않고 결과 산출이 가능하다.
const arr2 = arr.map(el => {
    el.age = el.age + 1;
    return el;
});

const arr3 = arr.map(el => el.name);
console.log(arr2);
console.log(arr3);