function getRandomNumber(maxNumber, minNumber) {
  return Math.random() * (maxNumber - minNumber) + min;
}

function splitCarNames(carNames) {
  return carNames.split(',');
}

export { getRandomNumber, splitCarNames };
