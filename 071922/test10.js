// JSON 형태로 출력

const testStringify = {
    stringfileNum: JSON.stringify(13.1),             //number
    stringfileStr: JSON.stringify('Carnival'),       //string
    stringfileBln: JSON.stringify(false),            //boolean
    stringfileArr: JSON.stringify([2021, 2022])      //arrangement
};

for (let key in testStringify){
    console.log(`------${key}------`);
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
};