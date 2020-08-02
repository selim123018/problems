function swap(arr, first_Index, second_Index){
  let temp=arr[first_Index];
  arr[first_Index]=arr[second_Index];
  arr[second_Index]=temp;
}

function buble_sort(arr){
  let len=arr.length;

  for(let i=0; i<len; i++){
    for(let j=0; j<len-i; j++){
      if(arr[j]>arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

console.log(buble_sort([3, 0, 2, 5, -1, 4, 1]));
