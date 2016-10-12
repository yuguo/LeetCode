/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var charLength = 7, //Max 3999 == 7 charactors
        charArray = ['M','D','C','L','X','V','I'],
        valueArray = [1000, 500, 100, 50, 10, 5, 1],
        countArray = new Array(charLength),
        easyS,
        i = 0,
        result = 0;
        
    // conver 4,9,40,90,400,900 to a easy calcuate way
    easyS = s.replace(/IV/, 'IIII').replace(/IX/, 'VIIII').replace(/XL/, 'XXXX').replace(/XC/, 'LXXXX').replace(/CD/, 'CCCC').replace(/CM/,'DCCCC');
    console.log(easyS);
    for(; i < charLength; i++){
        var reg = new RegExp(charArray[i], "g")
        countArray[i] = (easyS.match(reg) || '').length;
        result += valueArray[i]*countArray[i];
    }
    return result;
};
