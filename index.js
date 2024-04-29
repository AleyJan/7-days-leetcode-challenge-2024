/**
 * @param {string[]} strs
 * @return {string}
 */

// longest Common character

var longestCommonPrefix = function(strs) {
    
    if (strs.length==0) {
        return "";
    }

    let word = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(word) !== 0) {
            word = word.slice(0, word.length - 1);
            if (word === "") {
                return "";
            }
        }
    }

    return word;
}

console.log(longestCommonPrefix(["flower","flow","flight"])); 
console.log(longestCommonPrefix(["dog","racecar","car"]));      
