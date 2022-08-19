var generateBtn = document.querySelector("#generate");
var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T","U","V","W","X","Y","Z");
var lowerCase = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var nmbrs = (0,1,2,3,4,5,6,7,8,9)
var sChars = ("!","@","$","%","^","&","*","(",")","#","'","+","-",".","/",":",";","<","=",">","?","[","]","_","`","{","}","|","~");
var aChars = [];

function generatePassword () {

    var passwordLength = prompt("Pick a number between 8 and 128");
    if (passwordLength >8 && passwordLength < 128);{

        var includeUpper = prompt("Do you want to include uppercase letters? Write 'Yes' or 'No'.");
        if(includeUpper === "YES") {
            aChars = aChars.concat(upperCase);
            alert("You are choosing to include uppercase letters")
        } 
         
        
        else {
            alert("You are choosing not to include uppercase letters")
        }

        var includeLower = prompt("Do you want to include lowercase letters? Write 'Yes' or 'No'.");
        if (includeLower === "YES") {
            availableChar = availableChar.concat(lowerCase);
            alert("You chose to include lowercase letters!");
        }

        
        else {
            alert("You are choosing not to include lowercase letters");

        }

        var includeNumber = prompt("Do you want to include numbers? Write 'Yes' or 'No'.");
        if(includeNumber === "YES") {
            availableChar = availableChar.concat(nmbrs);
            alert("You are choosing to include numbers!");
        }
        
        
        else {
            alert("You are choosing not to include numbers.");
        }
  
        
        var includeSpecial = prompt("Do you want to include special characters? Write 'Yes' or 'No'.");
        if(includeSpecial === "YES") {
            availableChar = availableChar.concat(sChars);
            alert("You are choosing to include special characters!");
        }
        
        
        else {
            alert("You are choosing not to include special characters.");


        }

    }
        
        
}
    

    


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
