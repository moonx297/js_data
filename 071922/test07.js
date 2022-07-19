// 객체에서 키만 추출

const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: 'Infinity'
};

const arr1 = Object.keys(obj);      //키만 추출
const arr2 = Object.values(obj);    //값만 추출
const arr3 = Object.entries(obj);   //객체를 배열로 변환

//const arr3 = str.split(obj);

console.log(arr1);
console.log(arr2);
console.log(arr3)
