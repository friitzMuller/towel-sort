// You should implement your task here.

module.exports = function towelSort(matrix) {
    if(matrix == undefined || matrix.length == 0){
        return []
      }

     let newArr = [];

         for(var i = 0;i<matrix.length;i++){
      if(i % 2 == 0){
              newArr.push(matrix[i])
      }else{
        newArr.push(matrix[i].reverse())
        }
    }
       return newArr = [].concat(...newArr)


}
