function getRandomNumber(maxNumber, minNumber) {
  return Math.random() * (maxNumber - minNumber) + minNumber;
}

function splitCarNames(carNames) {
  return carNames.split(',');
}

function sortedByDistance(cars) {
  cars.sort((a, b) => {
    return b._distances - a._distances;
  });

  return cars;
}

function addTemplateIntoDOMInnerHTML(DOM, template) {
  console.log('call');
  DOM.innerHTML += template;
}

export { getRandomNumber, splitCarNames, sortedByDistance, addTemplateIntoDOMInnerHTML };
