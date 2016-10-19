/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var len = Math.max(num1.length, num2.length),
        result = '',
        flag = 0;
    // int32 最多10位数，9位留一个进位，循环数比较少
    for(let i = 0; i < len; i = i+9){
        let value = parseInt(num1.substr(-9) || 0) + parseInt(num2.substr(-9) || 0) + flag;
        num1 = num1.slice(0, -9);
        num2 = num2.slice(0, -9);
        if(value >= 1000000000){
            flag = 1;
        }else{
            flag = 0;
        }
        let valueString = value.toString().substr(-9);
        while(valueString.length < 9){
            valueString = '0'.concat(valueString);
        }
        result = valueString + result;
    }
    if(flag === 1){
        result = '1'.concat(result);
    }
    while(result[0] === '0' && result.length !== 1){
        result = result.slice(1);
    }
    return result;
};
//虽然减少了循环计算的次数，但是大大增加了调试错误的难度，以后尽量不要这样写了
