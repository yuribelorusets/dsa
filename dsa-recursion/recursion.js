/** product: calculate the product of an array of numbers. */

// function product(nums) {
//   if (nums.length === 0) return 1;

//   return nums[0] * product(nums.slice(1))
// }

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;

  return nums[idx] * product(nums, idx += 1);
}

// }
/** longest: return the length of the longest word in an array of words. */

function longest(words, longer = 0) {
  if (words.length === 0) return 0;

  return Math.max(words[0].length, longest(words.slice(1), words[0].length));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {
  if (idx >= str.length) return "";

  return str[idx] + everyOther(str, idx += 2);
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  return arr[0] === val || find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, j = str.length - 1) {
  if (i >= j) return true;

  return str[i] === str[j] && isPalindrome(str, i + 1, j - 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
  if (i < 0) return "";

  return str[i] + revString(str, i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;

  if (arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, acc = [], keys = Object.keys(obj)) {
  if (Object.keys(obj).length === 0) return acc;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

// you might find this problem easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
