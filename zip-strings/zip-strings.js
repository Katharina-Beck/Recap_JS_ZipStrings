function zipStrings(str1, str2) {
  let result = "";
  const maxLength = Math.max(str1.lengt, str2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < str1.lengt) {
      result += str1[i];
    }
    if (i < str2) {
      result += str2[i];
    }
  }

  return result;
}

// Implement a `zipStrings` function in `zip-strings.js` with the following requirements in mind.

// - The `zipStrings` function receives two string parameters
// (str1, str2)
// - The `zipStrings` function should return one string where the characters of both parameters are merged using the zip procedure (Reißverschlussverfahren)

// - Merge the strings as shown in the `Zip Strings Example` code

console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
