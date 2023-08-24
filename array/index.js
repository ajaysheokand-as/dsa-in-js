// 1. To Find the minimum and maximum values of array elements
// 2. To reverse the array
// 3. To Check contains duplicates
// 4. merge two arrays
// 5. mergeSort
// 6. Swap array elements
// 7. Pivot
// 8. Quick Sort Array
// 9. Given an integer array nums, find the subarray with the largest sum, and return its sum.

const array = [3, 4, 4, 5, 3, 6, 4, 3, 9, 7, 4, 4];

//1. To Find the minimum and maximum values of array elements
function minMax(array) {
  if (array.length > 0) {
    let min = array[0];
    let max = array[0];

    array.forEach((value) => {
      if (min > value) {
        min = value;
      }
      if (max < value) {
        max = value;
      }
    });
    console.log("Min=>", min, "Max=>", max);
  } else {
    console.log("Length of array must be greater than 0");
  }
}

// minMax(a);

// //////////////////////////////////////////////////////////////////////
//2. To reverse the array
function reverse(a) {
  reversedArray = [];
  if (a.length > 0) {
    for (let i = a.length - 1; i >= 0; i--) {
      reversedArray.push(a[i]);
    }
    console.log(a, reversedArray);
  } else {
    console.log("Length of array must be greater than 0");
  }
}

// reverse(a);

////////////////////////////////////////////////////////////////////////////
//3. To Check contains duplicates

function isContainsDuplicates(a){
if (a.length < 2) return false; 

for (let i = 0; i < a.length; i++) {
    for(let j=i+1; j < a.length; j++) {
     if(a[j] == a[i]) {
         return true;
     }
    }
 }
 return false;
}

// console.log(isContainsDuplicates([4,5,6,6,7]) ? "This array contains duplicates"  : "This array not contains duplicates");

/////////////////////////////////////////////////////////////////////////////////////

//4. merge two arrays

function mergeArrays(a, b) {
    if (a.length == 0) return b;
    if (b.length == 0) return a;
    let combined = [];
    let i=0;
    let j=0;

    while(i < a.length && j < b.length) {
        if(a[i] < b[j]) {
            combined.push(a[i]);
            i++;
        }else{
            combined.push(b[j]);
            j++
        }
    }
    while(i < a.length){
        combined.push(a[i]);
        i++;
    }
    while(j < a.length){
        combined.push(b[j]);
        j++
    }
    return combined;
}

// console.log(mergeArrays([3,4,2,5,7], [4,5,6,2,3,8,9,1]));

//5. mergeSort 

function mergeSort(array){
    if(array.length == 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return mergeArrays(mergeSort(left), mergeSort(right));    
}

// console.log(mergeSort([4,5,6,7]));

// 6. Swap array elements

function swapArray(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

// 7. pivot

// function pivot(array, pivotIndex=0, endIndex = array.length-1){
// let swapIndex = pivotIndex;
// for(let i=pivotIndex+1; i<=endIndex; i++){
//     if(array[i] < array[pivotIndex]){
//         swapIndex++;
//         swapArray(array, swapIndex, i);
//     }
// }
// swapArray(array, pivotIndex, swapIndex);
// return swapIndex;
// }

function pivot(array, pivotIndex=0, endIndex=array.length-1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
      if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swapArray(array, swapIndex, i);
      }  
  }
  swapArray(array, pivotIndex, swapIndex);

return swapIndex;
}

// console.log("Before pivot", array);
// console.log(pivot(array));
// console.log("After pivot", array);

// 8. Quick Sort Array

function quickSortArray(array, left=0, right= array.length-1){
  if(left < right){
    let pivotIndex = pivot(array, left, right);
    quickSortArray(array, left, pivotIndex-1);
    quickSortArray(array, pivotIndex+1, right);
  }
  return array;

}

// console.log(quickSortArray([4,6,1,7,3,2,5]));

//9. Given an integer array nums, find the subarray with the largest sum, and return its sum.
// link: https://leetcode.com/problems/maximum-subarray/description/


const maxSubArray = function(nums) {

  let max =nums[0], current=nums[0];
  for(let i=0, j=1; i < nums.length; j++){
      current += nums[j];
      if(current > max){
          max = current;
      }
      if(j >= nums.length-1){
          i++;
          j=i;
          current=0;
      }
  }
  return max;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

