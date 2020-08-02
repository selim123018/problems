function swap(items, first_Index, second_Index){
  let temp=items[first_Index];
  items[first_Index]=items[second_Index];
  items[second_Index]=temp;
}

function selection_sort(items){
  let len=items.length;
  let min;
  for(let i=0; i<len; i++){
    min=i;
    for(let j=i+1; j<len; j++){
      if(items[min]>items[j]){
        min=j;
      }
    }
    if(i!=min){
      swap(items, i, min);  
    }
  }
  return items;
}

console.log(selection_sort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
