var repeatedSubstringPattern = function(s) {
    let l = s.length, tmp;
    for(i = 1; i < l; i++){
        tmp = s.slice(0, i);
        if(isRepeatedSubString(s, tmp)){
            return true;
        }
    }
    return false;
};

function isRepeatedSubString(s, a){
    let l = a.length;
    while(s.indexOf(a) === 0){
        s = s.substr(l);
        if(s === '') return true;
    }
    return false;
}
