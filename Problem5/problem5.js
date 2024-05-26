// Problem: Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//Rules for a smiling face:
//Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//Every smiling face must have a smiling mouth that should be marked with either ) or D
//No additional characters are allowed except for those mentioned.


// Function to count the number of smiling faces in an array
function countSmileys(arr) {
    // Define a regular expression to match valid smiling faces
    let smileyPattern = /^[:;][-~]?[)D]$/;
  
    // Initialize a counter for smiley faces
    let count = 0;
  
    // Iterate through each element in the array
    for (let face of arr) {
      // Check if the current element matches the smiley pattern
      if (smileyPattern.test(face)) {
        // If it matches, increment the counter
        count++;
      }
    }
  
    // Return the total count of smiley faces
    return count;
  }



//Solving this problem was definitely a bit more challenging but still enjoyable as it required a clear understanding of regular expressions to define the valid patterns for smiling faces. The task was straightforward once the rules for a smiling face were translated into a regex pattern. It was satisfying to implement the solution and see it correctly count the smiley faces in various test cases. This problem was a good exercise in pattern matching and iteration in JavaScript, making it both fun and educational.