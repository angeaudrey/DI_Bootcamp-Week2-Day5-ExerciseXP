// Create a JS file and link it to the index.html file.

// Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
// We will learn more about events next week ;)


// Now let’s create the function:

// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
 
/*
function playTheGame() {
	let jouer = confirm("souhaitez-vous jouer au jeu?");

while(true)
{

}
	if ( jouer == false)
	{
		alert("Pas de probleme,au revoir")
	}
	else {
		let reponse = prompt("Entrez un nombre compris entre 0 et 10")
		
		if(isNaN(reponse ) == true)
		{
			alert("desolé ce n'est pas un nombre, au revoir")
		}
		else if(!nombre(reponse)) {

			alert("desolé ce n'est pas un bon nombre, au revoir")

		}
     
     	}
     	let computerNumber = Math.floor(Math.random()*10)
     console.log(computerNumber)
}

function nombre(str){ 
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)

}

function checknombre(nbre)
{
	return nbre >= 0 && nbre <= 10
}

function compareNumbers(userNumber,computerNumber)
{

}
*/

function playTheGame(){

    let jouer = confirm("souhaitez-vous jouer au jeu?")

    if(jouer ==false){

        alert("Pas de problème , au revoir")
    }else{

        let userNumber;

        while(true){
            userNumber = prompt("Entrez un nombre entre 0 et 10")
            if(isNaN(userNumber)==true){

                alert("Désolé, ce n'est pas un numéro, au revoir")

            }else if(!nbre(userNumber)){

                alert("Désolé, ce n'est pas un bon chiffre, au revoir")

            }else{

                

                break;
            
            }

            
        }
                let computerNumber = Math.floor(Math.random()*10)
                 console.log(computerNumber)
            
                compareNumbers(userNumber, computerNumber)
     }

   

}


function nbre(str){ 
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)

}

function compareNumbers(userNumber,computerNumber){

   let cpt= 0

   while(cpt < 3){
        if(userNumber == computerNumber){ 

            alert("vainqueur") 
            return;
       
        }                
        else if(userNumber > computerNumber){
            alert("Votre nombre est plus grand que celui de l'ordinateur, devinez à nouveau")
            userNumber = prompt("Entrez un nouveau nombre :");
        } else {
            alert("Votre nombre est plus petit que celui de l'ordinateur, devinez à nouveau");
            userNumber = prompt("Entrez un nouveau nombre :");
        }
        cpt++


    }
    alert("pas de chance");

   

}