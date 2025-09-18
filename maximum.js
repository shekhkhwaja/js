// Function to find the maximum value in an array
function findMaximum(arr) {
    if (arr.length === 0) {
        return undefined; // or throw an error if preferred
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
const numbers = [3, 7, 2, 9, 4];
console.log('Maximum value:', findMaximum(numbers));
