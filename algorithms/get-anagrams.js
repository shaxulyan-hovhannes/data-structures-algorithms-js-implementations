function getAnagrams(str) {
  if (str.length <= 1) {
    return [str];
  }

  let anagrams = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    let remainingChars = str.slice(0, i) + str.slice(i + 1);
    let remainingAnagrams = getAnagrams(remainingChars);

    for (let anagram of remainingAnagrams) {
      anagrams.push(char + anagram);
    }
  }

  return anagrams;
}
