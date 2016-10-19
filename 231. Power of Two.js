/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    var s = n.toString(2);
    console.log(s.replace(/0/g, ''));
    if(s[0] === '1' && s.replace(/0/g, '') === '1'){
        return true;
    }else{
        return false;
    }
};

// 社区看到的利用位运算替代10000...的检测的黑科技：
// return n > 0 && !(n&(n-1));
