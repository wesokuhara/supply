const digits = n => {
  if (n === 0) return [0];
  let i = Math.abs(Math.floor(n));

  const digits = [];
  while (i > 0) {
    digits.unshift(i % 10);
    i = Math.floor(i / 10);
  }

  return digits;
};

module.exports = digits;
