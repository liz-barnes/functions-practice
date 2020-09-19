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
add(17, 4, 11);

// Self-Driving Cars
const go = (direction, speed) => {
  if (speed > 75) {
    return `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`;
  } else {
    return `The car is moving ${direction} at ${speed} mph.`;
  }
};

go('forward', 85);

// Evens or Odds
const numbers = [3,7,6,5,8,2,0];

const evenOrOdd = (num) => {
  if (num % 2 == 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

// ******
for (const number of numbers) {
  evenOrOdd(number);
}
// ******

// Double Functions
const words = [
  "The", "killing", "complex", "houses",
  "married", "kittens", "and", "single",
  "soldiers", "and", "their", "kleptomaniacal",
  "families"
]

// *******
const filterWords = () => {
  const filteredWords = words.filter(word => word.startsWith("k")); 
  console.log(filteredWords);
  return filteredWords;
  // wordWithK = words.startsWith('k');
  // console.log(words.startsWith('k'));
}

const convertToSentence = () => {
  const sentence = words.join(' ');
  console.log(sentence);
  return sentence;
}
console.log(convertToSentence(filterWords()));
// *******

// Tune Piano
const oddsOfCatchingFish = () => {
  const odds = Math.random() * 3
  console.log(odds);
  if (odds >= 2.5) {
    // return 'Sven hooked a tuna!  :)'
    return true;
  } else {
    // return 'Sven came up empty-handed.  :(';
    return false;
  }
}
oddsOfCatchingFish();

// Multiple Parameters
const foodMenu = (item1, item2, item3, item4) => {
  let foodOrder = {
    "sandwich": item1,
    "side": item2,
    "drink": item3,
    "dessert": item4
  };

  return foodOrder
};

const takeOutBag = foodMenu("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges");

// Higher Order Functions
