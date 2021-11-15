// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;
//     let frequencyCounter = {};
//     let frequencyCounter2 = {};
//     for (let val of str1) {
//         frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//     }
//     for (let val of str2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }
//     for (let key in frequencyCounter) {
//         if (!(key in frequencyCounter2)) return false;
//         if (frequencyCounter2[key] !== frequencyCounter[key]) return false;
//     }
//     return true;

// }

// a refactored version

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const lookup = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) return false;
        else lookup[letter] -= 1;
    }
    return true;
}


console.log(validAnagram('cot', 'tac'));  // expect true