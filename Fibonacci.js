function fibs(number) {
  let fibArray = [];

  for (let i = 0; i < number; i++) {
    if (i < 2) {
      fibArray.push(i);
    } else {
      const sumNumber = fibArray[i - 2] + fibArray[i - 1];
      fibArray.push(sumNumber);
    }
  }
  return fibArray;
}

function fibsRec(number, i = 0, fibArray = []) {
  if (number == 0) {
    return fibArray;
  } else {
    if (i < 2) {
      fibArray.push(i);
    } else {
      fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
    }

    return fibsRec(number - 1, i + 1, fibArray);
  }
}

console.log(fibsRec(4));
