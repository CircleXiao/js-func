// 计算出一个字符串共有多少个单词组成
function countWords (str) {
    return str.split(" ").length;
}
console.log(countWords('Good morning, I love JavaScript.'));