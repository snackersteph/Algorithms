// *****************************************************
// **************** CALCULATE RAIN WATER ***************
// *****************************************************

// You are given an input array where each element represents the height of a line of towers. 

// The width of every tower is 1.
// It starts raining. How much water is collected between the towers? 
// Eg. Input: [5, 2, 3, 2, 1, 3]
// Output: 4
// Visualization:
// '-' is water
//  '#' is a block

// #
// #
// # - # -  - #
// # # # # - #
// # # # # # #

var calculateRainWater = (heights) => {
  if (heights.length < 3) { return 0; }

  let left = 0; 
  let right = heights.length - 1;
  let water = 0;
  let maxLeft = maxRight = 0;
  
  while (left <= right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) { 
        maxLeft = heights[left]; 
      } else { 
        water += maxLeft - heights[left]; 
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        water += maxRight - heights[right];
      }
      right--;
    }
  }
  return water;
}


// >>>>>>>>>>>>>>>>>> TEST CASES >>>>>>>>>>>>>>>>>> //

let h1 = [37,9,61,94,65,70,51,57,88,46,79,50,35,58,60]; // 207
let water1 = calculateRainWater(h1);
console.log(water1);

let h2 = [0,1,0,2,1,0,1,3,2,1,2,1]; // 6
let water2 = calculateRainWater(h2);
console.log(water2);