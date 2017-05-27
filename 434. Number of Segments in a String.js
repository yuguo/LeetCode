var countSegments = function(s) {
    return s.split(' ').filter(isSolid).length;
};

function isSolid(a){
    if(a === ''){
        return false;
    }else{
        return true;
    }
}

// 让人更加熟悉数组的split和filter操作……
