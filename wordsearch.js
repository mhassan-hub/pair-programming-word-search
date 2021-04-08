const wordSearch = (letters, word) => {
  if (!letters) {
    return false;
  }
  if (!letters.length) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  const check = (array) => {
    for (let l of array) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false;
  };

  let col = letters.length;
  let row = letters[0].length;
  let verticalJoin = [];

  if (col > row) {
    let temp = 0;
    temp = row;
    row = col;
    col = temp;
  }

  for (let i = 0; i < col; i++) {
    let string = '';
    for (let j = 0; j < row; j++) {
      string += letters[j][i];
    }
    verticalJoin.push(string);
    string = '';
  }
  if (check(horizontalJoin) === true || check(verticalJoin) === true) {
    return true;
  } else {
    return false;
  }
};

module.exports = wordSearch;