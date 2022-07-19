const str = 'abcdefghijklmnopqrstuvwxyz';
const arr = str.split('');  //문장 분리하여 배열로 변환
arr.reverse();              //역순

console.log(arr.join(''));  //합치기

//+ 번외로 궁금하면?
console.log(str.split(''));
