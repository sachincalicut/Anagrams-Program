
function CleanString(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB){
    return CleanString(stringA) === CleanString(stringB);
}
const strA = 'Road Safety First';
const strB = 'Road Safety';
const result = anagrams(strA, strB);
console.log('result', result);
