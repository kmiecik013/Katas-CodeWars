function findLowestInt(k) {
  let n = 1;
  const x = k + 1;
  const string = n => n.toString().split``.sort().join``;
  while (1) if (string(n * k) === string(n++ * x)) return --n;
}