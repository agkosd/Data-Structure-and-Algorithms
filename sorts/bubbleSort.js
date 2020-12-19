function bubbleSort(unsortedArray) {
  for (let i = 0; i < unsortedArray.length; i++) {
    let swapped = false;
    for (let j = 0; j < unsortedArray.length - 1; j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        let temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      return unsortedArray;
    }
  }
  return unsortedArray;
}

var arr = [1, 1, 1, 1, 1, 1, 1, 1];

console.log(bubbleSort(arr));
