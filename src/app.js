var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
const addChocolates = (chocolates, color, count) => {
  return count <= 0
    ? 'Number cannot be zero/negative'
    : herlperOfAdd(chocolates, color, count);
};
const herlperOfAdd = (chocolates, color, count) => {
  for (let i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
  return chocolates;
};

//Progression 2: Remove z chocolates from the top the dispenser
const removeChocolates = (chocolates, number) => {
  let lengthChoco = chocolates.length;
  return number <= 0
    ? 'Number cannot be zero/negative'
    : lengthChoco < number
    ? 'Insufficient chocolates in the dispenser'
    : helperRemove(chocolates, number);
};

const helperRemove = (chocolates, number) => {
  let removedChoco = [];
  for (let i = 0; i < number; i++) {
    removedChoco.push(chocolates.shift());
  }
  return removedChoco;
};

//Progression 3: Dispense z chocolates

const dispenseChocolates = (chocolates, number) => {
  let lengthChoco = chocolates.length;
  return number <= 0
    ? 'Number cannot be zero/negative'
    : lengthChoco < number
    ? 'Insufficient chocolates in the dispenser'
    : herlperOfDispense(chocolates, number);
};

const herlperOfDispense = (chocos, num) => {
  let newChoco = [];
  for (let i = 0; i < num; i++) {
    newChoco.push(chocos.pop());
  }
  return newChoco;
};

//Progression 4: Dispense z chocolates of x color
const dispenseChocolatesOfColor = (chocolates, number, color) => {
  return dispenseChocolates(chocolates, number);
};
// const dispenseChocolatesOfColor = (chocolates, number, color) => {
//   let lengthChoco = chocolates.length;
//   return number <= 0
//     ? 'Number cannot be zero/negative'
//     : lengthChoco < number
//     ? 'Insufficient chocolates in the dispenser'
//     : herlperOfDispenseChocolatesOfColor(chocolates, number, color);
// };

// const herlperOfDispenseChocolatesOfColor = (chocos, num, color) => {
//   let newChoco = [];
//   for (let i = 0; i < num; i++) {
//     color === chocos[i] ? newChoco.push(chocos.pop()) : null;
//   }
//   return newChoco;
// };

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
const noOfChocolates = (chocolates) => {
  let colorsArr = [
    'green',
    'silver',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink',
  ];
  let result = [];
  colorsArr.map((curr, idx) => {
    let count = 0;
    chocolates.map((color) => {
      if (color === curr) {
        count++;
      }
    });
    count > 0 ? result.push(count) : null;
  });
  return result;
};

//Progression 6: Sort chocolates based on count in each color. Return array of colors
const helperSortChocolates = function (chocolates) {
  let ans = [];
  let store = {};
  chocolates.sort();

  for (let i = 0; i < chocolates.length; i++) {
    let count = 0;
    for (let j = 0; j < chocolates.length; j++) {
      if (chocolates[i] == chocolates[j]) {
        count += 1;
      }
    }

    store[chocolates[i]] = count;
  }
  const sortable = Object.fromEntries(
    Object.entries(store).sort(([, a], [, b]) => b - a)
  );

  Object.keys(sortable).forEach((key) => {
    for (let i = 0; i < sortable[key]; i++) {
      ans.push(key);
    }
  });

  return ans;
};

function sortChocolateBasedOnCount(chocolates) {
  finalAns = helperSortChocolates(chocolates);
  return finalAns;
}

//Progression 7: Change z chocolates of x color to y color
const changeChocolateColor = (chocolates, number, color, finalColor) => {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : color === finalColor
    ? `Can't replace the same chocolates`
    : helperChangeColor(chocolates, number, color, finalColor);
};
const helperChangeColor = (chocolates, number, color, finalColor) => {
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
  }
  return chocolates;
};

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
const changeChocolateColorAllOfxCount = (chocolates, color, finalColor) => {
  let changedColors = helperChangeColor(
    chocolates,
    chocolates.length,
    color,
    finalColor
  );
  let count = 0;
  changedColors.map((choco) => {
    choco === finalColor ? count++ : null;
  });
  return color == finalColor
    ? "Can't replace the same chocolates"
    : [count, changedColors];
};

//Challenge 1: Remove one chocolate of x color from the top
const removeChocolateOfColor = (chocolates, color) => {
  let start = 0;
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      start = i;
      break;
    }
  }
  chocolates.splice(start, 1);
  return chocolates;
};

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolates) {
  let store = {};
  chocolates.map((choco) => {
    if (choco in store) {
      store[choco] += 1;
    } else {
      store[choco] = 1;
    }
  });

  let chocoFreqArray = Object.values(store);
  let result = 0;
  chocoFreqArray.map((chocoFreq) => {
    if (chocoFreq % 3 == 0) {
      result += chocoFreq / 3;
    }
  });
  return result;
}
