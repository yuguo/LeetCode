var reverseWords = function(s) {
    return s.split(' ').map(revStr).join(' ');
};

function revStr(s){
    return s.split('').reverse().join('');
}

// 觉得多写子函数是一个比较好的方法，显得有条理，也方便测试
