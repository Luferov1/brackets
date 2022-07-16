module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  const newConfig = bracketsConfig.reduce( (prev, item) => ([...prev, ...item]), []);
  for (let item of newConfig) {
    if (!str.includes(item)) return false;
    const arr = str.split('').filter( (item) => (item !== '|' && item !== '7' && item !== '8'));
    let sum = 0;
    for (let item of arr) {
      if (newConfig.indexOf(item) % 2 === 0) sum++;
      else sum--;
      if (sum < 0) return false;
    }
    return true;
  }
}
