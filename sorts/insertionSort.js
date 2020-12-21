function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let x = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > x) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = x;
  }
  return arr;
}

let ua = [5, 4, 3, 2, 1, 1, 1];

console.log(insertionSort(ua));
