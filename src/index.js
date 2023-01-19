
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix===undefined){return []}
    return matrix.map((el,indx)=>indx%2!==0?el.reverse():el).flat();
};

