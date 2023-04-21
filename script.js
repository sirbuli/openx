/* TASK 1

Find the length of the longest substring without repeating characters in the given
string `s`.
Examples:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc"/"bca"/"cab", with the length of 3.
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

SOLUTION

*/

function longestSubstring(str) {
  let result = [];
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (result.includes(str[right])) {
      result.shift();
      left++;
    }
    result.push(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));

// One more test
console.log(longestSubstring("abcdabcdaabdc"));

/* TASK 2

Create test-cases for successful and unsuccessful login, and any additional
test-cases you might think it would be good to add. Form for testing can be found
here: http://uitestingplayground.com/sampleapp

SOLUTION

Test cases for successful user login:

  1. Test login with correct data:
      Enter a correct username containing a letter: "a"
      Enter the correct password: "pwd"
      Click the "Log in" button
      The user is logged in.

  2. Test login with correct data:
      Enter a correct username containing a number: "1"
      Enter the correct password: "pwd"
      Click the "Log in" button
      The user is logged in.

  3. Test login with correct data:
      Enter a correct username containing a letter and a number: "a1"
      Enter the correct password: "pwd"
      Click the "Log in" button
      The user is logged in.

  4. Test login with correct data:
      Enter a correct username containing a special character: "!"
      Enter the correct password: "pwd"
      Click the "Log in" button
      The user is logged in.

  5. Test login with correct data:
      Enter a correct username containing a letter, a number, and a special character: "a1!"
      Enter the correct password: "pwd"
      Click the "Log in" button
      The user is logged in.

  6. Test login with correct data:
      Enter a correct username containing a space: " "
      Enter the correct password: "pwd"
      Click the "Log in" button
      The user is logged in.

Test cases for unsuccessful user login:

  1. Test login with correct username and incorrect password:
      Enter a correct username: "a"
      Enter an incorrect password: "wrongpassword"
      Click the "Log in" button
      An error message is displayed.

  2. Test login with correct username and incorrect password containing spaces:
      Enter a correct username: "a"
      Enter an incorrect password containing spaces: " "
      Click the "Log in" button
      An error message is displayed.

  3. Test login with correct username and empty password field:
      Enter a correct username: "a"
      Leave the password field empty without any character
      Click the "Log in" button
      An error message is displayed.

  4. Test login with incorrect username and correct password:
      Leave the username field empty without any character
      Enter the correct password: "pwd"
      Click the "Log in" button
      An error message is displayed.

  5. Test login with incorrect username and incorrect password containing spaces:
      Leave the username field empty without any character
      Enter an incorrect password containing spaces: " "
      Click the "Log in" button
      An error message is displayed.

  6. Test login with empty fields:
      Leave the username field empty without any character
      Leave the password field empty without any character
      Click the "Log in" button
      An error message is displayed.

  7. Test login with incorrect username and incorrect password:
      Leave the username field empty without any character
      Enter an incorrect password: "wrongpassword"
      Click the "Log in" button
      An error message is displayed.

*/
