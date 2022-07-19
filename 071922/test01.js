//배열 정렬하기 - sort

const numArr1 = [2,0,3,4,1];
const numArr2 = [2,0,3,4,1];
const objArr = [
    {id : 2, name: 'Leo'},
    {id : 2, name: 'Bella'},
    {id : 2, name: 'Gyuri'},
    {id : 2, name: 'Ducky'},
    {id : 2, name: 'Jojo'}
];

//숫자 정렬 방법
numArr1.sort(function(a,b) {return a - b;});    //오름차순
numArr2.sort(function(a,b) {return b - a;});    //내림차순

//객체 정렬 방법
objArr.sort(function(a,b){                      
    if(a.name > b.name) return 1;            //앞이냐
    else if(b.name > a.name) return -1;     //나보다 뒤냐
    else return 0;                          //나랑 같으냐
});

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);