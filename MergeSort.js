function mergeSort(array) {
  if (array.length == 1) {
    return array;
  } else {
    let leftArray = splitLeftArray(array);
    let rightArray = splitRightArray(array);

    if (leftArray.length == 1 && rightArray.length == 1) {
      if (leftArray[0] > rightArray[0]) {
        const leftArrayValue = leftArray;
        leftArray = rightArray;
        rightArray = leftArrayValue;
      }
    }

    let leftHalf = mergeSort(leftArray);
    let rightHalf = mergeSort(rightArray);

    if (
      (leftHalf.length > 1 && rightHalf.length > 1) ||
      (leftArray.length == 1 && rightArray.length > 1) ||
      (leftArray.length > 1 && rightArray.length == 1)
    ) {
      return mergeFinalArray(leftHalf, rightHalf);
    }

    return leftHalf.concat(rightHalf);
  }
}

function splitLeftArray(array) {
  return array.slice(0, array.length / 2);
}

function splitRightArray(array) {
  return array.slice(array.length / 2, array.length);
}

function mergeFinalArray(leftHalf, rightHalf, sortedArray = []) {
  if (leftHalf.length == 0) {
    return sortedArray.concat(rightHalf);
  } else if (rightHalf.length == 0) {
    return sortedArray.concat(leftHalf);
  } else {
    if (leftHalf[0] < rightHalf[0]) {
      sortedArray.push(leftHalf[0]);
      leftHalf.shift();
    } else {
      sortedArray.push(rightHalf[0]);
      rightHalf.shift();
    }

    return mergeFinalArray(leftHalf, rightHalf, sortedArray);
  }
}
