//Ex 1:

function caculatesShopingBudget(listProduction) {
    let sum = 0;
    for (let i = 0; i < listProduction.length; i++) {
        const unit = listProduction[i][0];
        const price = listProduction[i][1];
        sum += unit * price;
    }
    
    return sum;
}
const listProduction = [[1,1],[2,3],[2,4]];
console.log(caculatesShopingBudget(listProduction));


//Ex 2:


function snail(array) {
    const result = [];
    let left = 0;
    let right = array[0].length;
    let top = 0;
    let bottom = array.length;
    while (top < bottom || left < right) {
        for (let i = left; i < right; i++) {
            result.push(array[left][i]);
        }
        top++;
        for (let i = top; i < bottom; i++) {
            result.push(array[i][right - 1]);
        }
        right--;
        for (let i = right - 1; i >= left; i--) {
            result.push(array[bottom - 1][i]);
        }
        bottom--;
        for (let i = bottom - 1; i >= top; i--) {
            result.push(array[i][left]);
        }
        left++;
    }
    return result;
}
const array = [[1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9]];
console.log(snail(array));

