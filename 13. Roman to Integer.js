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

// 有三种方案：
// 1. 递归，从左往右计算字符串，找到4、9、40、90等大数字的时候，取出大数字，然后递归调用右边剩下的字符串；
// 2. 从右往左，每次取一个字符，并查看它比右边字符是大还是小，如果是大，就+，如果小，就-，直到最左边；
// 3. 也就是我写的这个方案，因为计算的难点在负值，所以先把有负值全部转换成正值语法（比如IV，改成IIII，我发明的），然后就可以无脑计算字符出现次数了。
