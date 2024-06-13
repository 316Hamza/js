function countCharacters(str) {
    // Initialize an empty object to hold the character counts
    const charCount = {};

    // Loop over each character in the string
    for (let char of str) {
        // If the character is already a key in the object, increment its value
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // If the character is not a key in the object, add it with a value of 1
            charCount[char] = 1;
        }
    }

    // Return the object with character counts
    return charCount;
}

// Example usage:
const result = countCharacters("hello world");
console.log(result); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }


function fibonacci(n) {
    // Handle the base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Initialize the first two Fibonacci numbers
    let a = 0;
    let b = 1;
    let result;

    // Compute the Fibonacci sequence up to the n-th number
    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    // Return the n-th Fibonacci number
    return result;
}

// Example usage:
console.log(fibonacci(0));  // Output: 0
console.log(fibonacci(1));  // Output: 1
console.log(fibonacci(2));  // Output: 1
console.log(fibonacci(3));  // Output: 2
console.log(fibonacci(10)); // Output: 55


function sortNumbers(arr) {
    // Use the built-in sort method with a compare function to sort the numbers
    return arr.slice().sort((a, b) => a - b);
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]