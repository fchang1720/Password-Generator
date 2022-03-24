// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  if(passwordInput){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}


function generatePassword(){
  var passMaster = []
  for( var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * finalpassword.length);
    var password = passMaster + finalpassword[randomIndex];
  }
 return (password);
}


generateBtn.addEventListener("click", writePassword);



var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(uppercase);
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowercase);
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numbers);
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "<", ">", "."];
console.log(special);


var finalpassword = [];


var passwordInput = function() {
  
  var length = window.parseInt(prompt("Enter a number between 8 and 128 for your password length."));
    if (isNaN(length) || length < 8 || length > 128) {
      window.alert("please enter a number between 8 and 128")
      passwordInput();
    }
    else{
      
     
    var passwordType = function() {

    if (confirm("Include uppercase letters in your password?")) {
    
    finalpassword = finalpassword.concat(uppercase);
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
    

    }
    passwordType(); 
    // if (passwordType) {
    //   console.log(finalpassword);
    // }
  }
} 
  

      
passwordInput();

  // if (passwordlength <8) 

  //   alert("please enter at least 8 characters")
  // 

  // Add event listener to generate button  
  // 1. create variables to save user input from prompts
    // password length (string) -> need it to be integer ultimately
    // specialCharacters (boolean) confirm box
    // use conditionals to validate inputs (password length, user enters no inputs)
    // 2. create arrays for each type of character.


    
    // 3. use randomizer function to select characters from each array
    // 4. generatePassword function -- take user input, grab characters from array, and generate password.
    // 5. create empty array that represents the final password

    // 6. join the character arrays together based on user input
    // 7. randomize characters from the joined arrays

    // 8. transforming the array into a string
      // array.join