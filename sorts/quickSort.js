function partition(a, low, high) {
  let i = low;
  let j = high;
  let mid = Math.floor(low + (high - low) / 2);

  let pivot = a[mid];
  console.log(mid, pivot);
  do {
    do {
      j--;
    } while (a[j] > pivot);
    do {
      i++;
    } while (a[i] < pivot);
    if (i < j) {
      [a[j], a[i]] = [a[i], a[j]];
    }
  } while (i < j);
  [a[j], a[mid]] = [a[mid], a[j]];
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
let a = [5, 4, 3, 2, 1];
//let a = [1];
quickSort(a, 0, a.length);
console.log(a);
