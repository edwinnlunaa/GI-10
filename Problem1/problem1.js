// Problem: Trolls are attacking your comment section
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.

// Function to remove vowels from a given string
function disemvowel(str) {
    // Create a regular expression that matches any vowel (both uppercase and lowercase)
    let vowelsPattern = /[aeiouAEIOU]/g;
  
    // Use the replace() method to replace all vowels in the string with an empty string
    let result = str.replace(vowelsPattern, '');
  
    // Return the modified string with vowels removed
    return result;
  }

//   Solving this problem was pretty straightforward. The task of removing vowels from a string is a example of how regular expressions can be used for pattern matching and string manipulation. By creating a simple pattern to match all vowels, both uppercase and lowercase, I could easily remove them using the replace method. 

