/*
Create your main function first.
Create a random number function to generate a # between 1-100.
Prompt the user to enter/guess a number.
Create a while loop that will stop when they guess the right answer
inside the while loop: if statements for if the user's guess is below or above the random number.
print "got it" in the while loop once they guess the number.
run the main function.
 */
function main()
{
    var randomNum = getRandomInt(100);


    while (UserInput !== randomNum) {
        var UserInput = prompt("Guess a number between 1-100.");
        if (UserInput > randomNum) {
            alert("Lower");
        }
        else if (UserInput < randomNum) {
            alert("Higher");
        }
        else{
            break;
        }
    }
    alert("GOT IT!!!");

}

function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

main();