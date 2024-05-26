// Problem: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Function to check if the first string ends with the second string
function solution(str, ending) {
    // Use the endsWith() method to check if str ends with ending
    let result = str.endsWith(ending);
  
    // Return the result of the check
    return result;
  }
  
  // Example usage
  console.log(solution('abc', 'bc')); // returns true
  console.log(solution('abc', 'd'));  // returns false


  // Solving this problem was enjoyable due to its simplicity and the direct approach provided by JavaScript's built-in endsWith method. It was satisfying to see how a single method call could handle the task efficiently and accurately.  Overall, it was a straightforward problem that showcased the utility of built-in methods for common string operations.