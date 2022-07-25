module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  const newConfig = bracketsConfig.reduce( (prev, item) => ([...prev, ...item]), []);
  console.log(newConfig);
  let bracketsToClose = [];
  let specialBrackets1 = 0;
  let specialBrackets2 = 0;
  let specialBrackets3 = 0;
  for (let item of newConfig) {
    if (!str.includes(item)) return false;
    const arr = str.split('');
    for (let item of arr) {
      let i = newConfig.indexOf(item);
      if (item === '|' || item === '7' || item === '8') {
        if (item === '|') {
          if (specialBrackets1 === 0) {
            bracketsToClose.push(item);
            specialBrackets1++;
          }
          else {
            if (item !== bracketsToClose[bracketsToClose.length - 1]) return false;
            specialBrackets1--;
            bracketsToClose.pop();
          }
        }
        else if (item === '7') {
          if (specialBrackets2 === 0) {
            bracketsToClose.push(item);
            specialBrackets2++;
          }
          else {
            if (item !== bracketsToClose[bracketsToClose.length - 1]) return false;
            specialBrackets2--;
            bracketsToClose.pop();
          }
        }
        else {
          if (specialBrackets3 === 0) {
            bracketsToClose.push(item);
            specialBrackets3++;
          }
          else {
            if (item !== bracketsToClose[bracketsToClose.length - 1]) return false;
            specialBrackets3--;
            bracketsToClose.pop();
          }
        }
        
      }

      else if (i % 2 === 0) {
        bracketsToClose.push(newConfig[i+1]);
      }

      else {
        if (item !== bracketsToClose[bracketsToClose.length - 1]) return false;
        bracketsToClose.pop();
      }
    }
    return true;
  }
}
