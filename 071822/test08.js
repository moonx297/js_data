// 배열 순환 - forEach

const arr = [
    {id: 0, name : '말자', age: 39},
    {id: 1, name : '여자', age: 36},
    {id: 2, name : '공자', age: 38},
    {id: 3, name : '순자', age: 38}
];

arr.forEach((el) =>{
    console.log(el.name);
});