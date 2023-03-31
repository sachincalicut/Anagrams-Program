
// Solution 1
//Step 1: To create char bilder functions
function CharBuilder(str) {
    let charmap_obj = {};
    for (let char of str) {
        if (charmap_obj[char]) charmap_obj[char]++;
        else
            charmap_obj[char] = 1;
    }
    return charmap_obj;
}
function anagrams(strA, strB) {
    //Step 2: Change the string to lower case and remove punctuations and any other special charators
    const clean_strA = strA.replace(/[^\w]/g, "").toLowerCase();
    const clean_strB = strB.replace(/[^\w]/g, "").toLowerCase();
    // Step 3: Call a string A and B with Charator Builder function to compare
    const obj_strA = CharBuilder(clean_strA);
    const obj_strB = CharBuilder(clean_strB);
    //Step 4: If both the strings anagram are returning true or not status
    if (Object.keys(obj_strA).length !== Object.keys(obj_strB).length) {
        return false;
    }
    for (let char in obj_strA) {
        if (obj_strA[char] !== obj_strB[char]) {
            return false;
        }
    }
    return true;
}
const strA = 'Road Safety First';
const strB = 'Road Safety';
const result = anagrams(strA, strB);
console.log('result', result);
