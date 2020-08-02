function quick_sort(arr){
  if(arr.length<=0){
    return arr;
  }else{
    let newArr=[];
    let leftArr=[];
    let rightArr=[];
    let pivot=arr.pop();
    let len=arr.length;

    for(let i=0; i<len; i++){
      if(arr[i]<=pivot){
        leftArr.push(arr[i]);
      }else {
        rightArr.push(arr[i]);
      }
    }
    return newArr.concat(quick_sort(leftArr), pivot, quick_sort(rightArr));
  }
}

console.log(quick_sort([3, 0, 2, 5, -1, 4, 1 ]));
