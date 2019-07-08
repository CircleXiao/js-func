// 按字母表顺序输出传入的参数字符串
function alphabetSort(str){
    sortstr = str.split("").sort().join("");
    return sortstr;
}
console.log(alphabetSort('hello'));
