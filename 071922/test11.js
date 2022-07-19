const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;  //g + i => 전역 검색 + 대소문자 구분 안함
const findRangeRegex = /([a-f])\w+/i;   //g가 없어서 처음에 찾는거 하나만 추출
const findDallRangeRegex = /([a-f])\w+/gi;  //한 단어에 a부터f까지의 알파벳이 있으면 그 알파벳부터 단어 마지막 알파벳까지를 나타냄. g가 있어서 처음에 찾은거 뿐만 아니라 모든걸 추출

//match() -> 캡처 그룹을 포함해서 모든 일치를 담은 배열 반환. 일치가 없으면 null 반환.
console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));     
console.log(str.match(findRangeRegex));        
console.log(str.match(findDallRangeRegex));