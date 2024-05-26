//Problem : Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).

// Function to check if three sides can form a triangle
function isTriangle(a, b, c) {
    // Check if all sides are positive
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }
  
    // Check the triangle inequality theorem
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    } else {
      return false;
    }
  }

  // This problem was enjoyable and straightforward. It involved applying a basic geometry rule, the triangle inequality theorem, to determine if three given side lengths can form a triangle. Implementing this theorem in code was simple, but it was important to remember to check for positive side lengths to ensure the sides could actually form a triangle. Overall, it was a good exercise in applying mathematical principles in a practical coding scenario.