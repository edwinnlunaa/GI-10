// problem : Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


// Function to return a number with its digits in descending order
function descendingOrder(n) {
    // Convert the number to a string
    let str = n.toString();
    
    // Split the string into an array of characters (digits)
    let arr = str.split('');
    
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    
    // Join the sorted array back into a string
    let sortedStr = arr.join('');
    
    // Convert the string back to a number
    let result = parseInt(sortedStr, 10);
    
    // Return the result
    return result;
  }


  // This problem was interesting and enjoyable to solve. It involved basic string manipulation and array operations, making it a good exercise in JavaScript fundamentals. The key steps were converting the number to a string, sorting the digits, and then converting it back to a number. It was satisfying to see how a few simple operations could rearrange the digits to form the highest possible number. Overall, this problem was a nice blend of logic and coding, making it a rewarding task to complete.