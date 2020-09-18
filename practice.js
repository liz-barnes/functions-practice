const calculateAgeInDogYears = (age) => {
  const ageInDogYears = age / 7;
  return ageInDogYears;
};

calculateAgeInDogYears(21);

const favDogBreed = (dogBreed) => {
  if (dogBreed === 'meow') {
    return 'I like cats';
  } else {
    return `My favorite dog breed is ${dogBreed}`;
  }
};

const myFavorite = favDogBreed('meow');

// Addition
const add = (num2, num1, num3) => {
  return num3 + num1 + num2;
};
console.log(add(17, 4, 11));

// Self-Driving Cars
const go = (direction, speed) => {
  if (speed > 75) {
    return `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`;
  } else {
    return `The car is moving ${direction} at ${speed} mph.`;
  }
};

console.log(go('forward', 85));

// Evens or Odds
const evenOrOdd = (num) => {
  if (num % 2 == 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}
console.log(evenOrOdd(6));