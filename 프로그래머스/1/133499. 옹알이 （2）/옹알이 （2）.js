function solution(babbling) {
  const isRepeat = /(aya|ye|woo|ma)\1+/;
  const isBabbling = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !isRepeat.test(word) && isBabbling.test(word) ? ++ans : ans
  ), 0);
}