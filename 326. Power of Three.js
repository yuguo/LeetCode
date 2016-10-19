/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var s = n.toString(3);
    console.log(s.replace(/0/g, ''));
    if(s[0] === '1' && s.replace(/0/g, '') === '1'){
        return true;
    }else{
        return false;
    }
};
// 不用循环或者递归，那就使用三进制
// 社区看到的神方法：return ( n>0 &&  1162261467%n==0);
// 脑洞大！
