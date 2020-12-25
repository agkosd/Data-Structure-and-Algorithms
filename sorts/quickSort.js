function partition(a, low, high) {
  let i = low;
  let j = high;
  let pivot = a[i];

  do {
    do {
      j--;
    } while (a[j] > pivot);
    do {
      i++;
    } while (a[i] <= pivot);
    if (i < j) {
      let temp = a[j];
      a[j] = a[i];
      a[i] = temp;
    }
  } while (i < j);

  {
    let temp = a[j];
    a[j] = a[low];
    a[low] = temp;
  }
  return j;
}

function quickSort(array, low, high) {
  let j;
  if (low < high) {
    j = partition(array, low, high);
    quickSort(array, low, j);
    quickSort(array, j + 1, high);
  }
}

//let a = [10,1, 2, 3, 4,100,0];
//let a = [1,0];
//let a = [5,4,3,2,1];
let a = [1];
quickSort(a, 0, a.length);
console.log(a);
