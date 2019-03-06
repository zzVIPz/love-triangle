/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let heroOneValue,
    heroTwoValue,
    count = 0;

  for (let i = 0; i <= preferences.length - 1; i++) {
    heroOneValue = preferences[i];
    heroTwoValue = preferences[heroOneValue - 1];
    if (heroOneValue === heroTwoValue) continue;
    if (preferences[heroTwoValue - 1] === i + 1) {
      count++;
    }
  }
  return count / 3;
};
