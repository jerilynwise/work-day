// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('you clikced button');

  //1. prompt the user for the password criteria
       //1a prompt() (hold a section for an answer) characters 8-128 alert() if no answer provided
      






       //1b. confirm() (true/false statements) for lowercare, uppercase, numbers, speical char
      

  //2. validate the input. at least one character type is selected
        //alert() to let them know that they need to make at least one selection


  //3. Generate password based on criteria

  //4. display generate password to the page
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);