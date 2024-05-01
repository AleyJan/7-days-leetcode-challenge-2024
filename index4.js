/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of s) {
        if (bracketPairs[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const lastOpenBracket = stack.pop();
            if (bracketPairs[lastOpenBracket] !== char) {

                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]")); 