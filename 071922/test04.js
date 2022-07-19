//배열의 특정 조건을 만족하는 찾기

const arr = [
    {name : '우림', age : 2},
    {name : '현아', age : 3},
    {name : '탄이', age : 6},
    {name : '현일', age : 5},
    {name : '희인', age : 1},
];

const myFriend = arr.find( a => a.age === 1);
console.log(myFriend)