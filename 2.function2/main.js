// 判断一个字符串是否为回文串
function palindrome(str){
    resstr = str.split("").reverse().join("");
    if (str === resstr) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome('hello'));
console.log(palindrome('abcba'));