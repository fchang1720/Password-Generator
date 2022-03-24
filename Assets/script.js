// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  return "password";
}

// if (passwordlength <8) 

//   alert("please enter at least 8 characters")
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1. create variables to save user input from prompts
    // password length (string) -> need it to be integer ultimately
    // specialCharacters (boolean) confirm box
function rdmSpc() {
  const symbols = '!@#$%^&*(){}[]=+?<>/.,'
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(rdmSpc());
    // numbers
function rdmNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
console.log(rdmNum());
    // lowercaseCharacters (boolean)
function rdmLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(rdmLower());
    // uppercaseCharacters (boolean)
function rdmUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
console.log(rdmUpper());
      //alert, confirm, prompt



      // use conditionals to validate inputs (password length, user enters no inputs)
var passwordLength = function() {
  var length = window.parseInt(prompt("Enter a number between 8 and 128 for your password length."))
    if (isNaN(length) || length < 8 || length > 128) {
      window.alert("please enter a number between 8 and 128")
      passwordLength();
    }

    if (confirm("Include uppercase letters in your password?")) {
      finalpassword =  finalpassword.concat(uppercase);
    }

    if (confirm("Include lowercase letters in your password?")) {
      finalpassword = finalpassword.concat(lowercase);
    }

    if (confirm("Include numbers in your password?")) {
      finalpassword = finalpassword.concat(numbers);
    }

    if (confirm("Include special characters in your password?")) {
      finalpassword = finalpassword.concat(special);
    }
    return true;
}
      
passwordLength();
      

      // 2. create arrays for each type of character.
var uppercase = [rdmUpper(), rdmUpper(), rdmUpper(), rdmUpper()];
console.log(uppercase);
var lowercase = [rdmLower(), rdmLower(), rdmLower(), rdmLower()];
console.log(lowercase);
var numbers = [rdmNum(), rdmNum(), rdmNum(), rdmNum()];
console.log(numbers);
var special = [rdmSpc(), rdmSpc(), rdmSpc(), rdmSpc()];
console.log(special);

    
    // 3. use randomizer function to select characters from each array
    // 4. generatePassword function -- take user input, grab characters from array, and generate password.
    // 5. create empty array that represents the final password
var finalpassword = [];
    // 6. join the character arrays together based on user input
    // 7. randomize characters from the joined arrays

    // 8. transforming the array into a string
      // array.join