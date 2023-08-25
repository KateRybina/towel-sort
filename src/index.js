// You should implement your task here.
module.exports = function towelSort(matrix) {
    let arraySort = [];
    let result = [];

    if (matrix === undefined || matrix.length == 0) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            arraySort.push(matrix[i].sort((a, b) => a - b));
        }
        if (i % 2 !== 0) {
            arraySort.push(matrix[i].sort((a, b) => b - a));
        }
    }

    for (let i = 0; i < arraySort.length; i++) {
        for (let j = 0; j < arraySort[i].length; j++) {
            result.push(arraySort[i][j]);
        }
    }

    return result;
};
