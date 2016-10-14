/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    'use strict';
    var i,
        j,
        m,
        n,
        num,
        sets = [],
        vsets = [],
        csets = [[],[],[]],
        numArray = ['1','2','3','4','5','6','7','8','9'];
    
    for(i = 0; i < 9; i++){
        sets[i] = new Set(); // init set
        for(j = 0; j < 9; j++){
            m = parseInt(i/3);
            n = parseInt(j/3);
            num = board[i][j];
            if(num === '.') {
                continue;
            }else if(numArray.indexOf(num) !== -1){ // valid number
                vsets[j] = vsets[j] || new Set(); // init vset
                csets[m][n] = csets[m][n] || new Set(); // init cset
                if(sets[i].has(num) || vsets[j].has(num) || csets[m][n].has(num)){
                    return false;
                }else{
                    sets[i].add(board[i][j]);
                    vsets[j].add(board[i][j]);
                    csets[m][n].add(board[i][j]);
                }
            }
        }
    }
    
    return true;
};

// 首先想到的思路是用9+9+9个数组存放所有需要验证的数列，然后专门用一个函数验证数组
// 但是多个循环调用性能不好，代码也超过50行
// 后来想到ES6新增的Set元素可以用来验证数组是否重复
// 而且可以用/运算符来在初次遍历时就把元素加到正确的Set中去
// 这样下来就是one pass验证，如果fail也第一时间return，性能提升了不少，代码行数有一半都是为了声明变量和缓存变量，其实可以更精简
