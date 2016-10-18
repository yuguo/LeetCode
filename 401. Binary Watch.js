/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var result = [];
    var pad = function(number){
        if(number < 10){
            return '0'.concat(number);
        }else{
            return number.toString();
        }
    }
    for(let i = 0; i < 12; i++){
        for(let j = 0; j <= 59; j++){
            if((i * 64 + j).toString(2).replace(/0/g,'').length === num){
                result.push(i+':'+pad(j));
            }
        }
    }
    return result;
};
