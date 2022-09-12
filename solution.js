const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = () => {
  for (let i = 0; i < someNums.length - 1; i++) {
    for (let j = i + 1; j < someNums.length; j++) {
      if (someNums[i] > someNums[j]) {
        [someNums[j],someNums[i]] = [someNums[i],someNums[j]]
      }
    }
  }
  return someNums;
};

// sort numbers in descending order
const sortNumsD = () => { 
  for (let i = 0; i < someNums.length - 1; i++) {
    for (let j = i + 1; j < someNums.length; j++) {
      if (someNums[i] < someNums[j]) {
        [someNums[j],someNums[i]] = [someNums[i],someNums[j]]
      }
    }
  }
  return someNums;
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  for (let i = 0; i < someWords.length - 1; i++) {
    for (let j = i + 1; j < someNums.length; j++) {
      if (someWords[i] > someWords[j]) {
        [someWords[j],someWords[i]] = [someWords[i],someWords[j]]
      }
    }
  }
  return someWords;
 };

// sort words in descending order case insensitive
const sortWordsD = () => {
  for (let i = 0; i < someWords.length - 1; i++) {
    for (let j = i + 1; j < someWords.length; j++) {
      if (someWords[i].toLowerCase() < someWords[j].toLowerCase()) {
        [someWords[j],someWords[i]] = [someWords[i],someWords[j]]
      }
    }
  }
  return someWords;
 };

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => { };

// sort products by price, ascending order
const sortProductPriceA = () => { };

// sort products by price, descending order
const sortProductPriceD = () => { };

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => { };

// sort catArt by designed by
const catArtSortDesginedByA = () => { };

// sort catArt by price
const catArtSortByPriceA = () => { };

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = () => { };

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
