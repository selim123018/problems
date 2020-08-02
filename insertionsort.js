function insertion_sort(arr){
  let len=arr.length;
  for(let i=1; i<len; i++){
    let key=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>key){
      arr[j+1]=arr[j];
      j=j-1;
    }
    arr[j+1]=key;
  }
  return arr;
}

console.log(insertion_sort([85, 12, 59, 45, 72, 51]));
