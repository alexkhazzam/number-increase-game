function greetUser() {
    let product, sum, random1, random2, random3, input1, input2, input3, levelDifficulty, logEntry;
    let gameLog = [];

    levelDifficulty = 1;

    greeting();

    function greeting() {
        alert("You are a secret agent breaking into a safe. Reach level 5 to win!");

        greeting2();
    }

    function greeting2() {
        //calculates random numbers and rounds them as integers
        //each time i load the program, the same numbers pop up, regardless that they are random. Why? 
        random1 = Math.round(Math.random() * (1 + levelDifficulty));
        random2 = Math.round(Math.random() * (1 + levelDifficulty));
        random3 = Math.round(Math.random() * (1 + levelDifficulty));

        sum = random1 + random2 + random3;
        product = random1 * random2 * random3;

        alert("*****Level " + levelDifficulty + " commencing*****\n\nThere are three numbers that you must find. You can use the same one more than once. \n\nSum of numbers: " + sum + "\n\nProduct of numbers: " + product + ". ");

        userInputs();
    }

    function userInputs() {
        input1 = prompt("Enter the first number here: ");
        input2 = prompt("Enter the second number here: ");
        input3 = prompt("Enter the third number here: ");
        //inputs the prompts as arguments into the next function
        numbersNotStrings(input1, input2, input3);
    }

    //this function validates the user inputs and sees if they are NAN or the wrong numbers
    function numbersNotStrings(num1, num2, num3) {
        let pluralOrSingular;
        /*hi*/
        logEntry = {
                level: levelDifficulty,
                enteredNumbers: num1 + ", " + num2 + ", " + num3 + "\n\n",
                correctNumbers: random1 + ", " + random2 + ", " + random3,
            }
            //pushing object into array that prints out all the rounds the player has played
        gameLog.push(logEntry)

        let product2 = parseInt(num1) * parseInt(num2) * parseInt(num3);
        let sum2 = parseInt(num1) + parseInt(num2) + parseInt(num3);

        //checks to see if one or more inputs were not numbers
        if ((isNaN(num1) && isNaN(num2)) || (isNaN(num1) && isNaN(num3)) || ((isNaN(num2) && isNaN(num3)))) {
            pluralOrSingular = "incorrect values. Please enter correct values next time; this level is restarting...";
            //checks to see if only one input was of incorrect value
        } else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            pluralOrSingular = "an incorrect value. Please enter a correct value next time; this level is restarting...";
        }

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("You entered " + pluralOrSingular);
            greeting2();
        } else if (product2 === product && sum2 === sum) {
            alert("Well Done, agent! Press \"OK\" to continue to the next level");

            let levelIncreasing = () => {
                if (levelDifficulty <= 4) //can adjust the rounds you want the player to play, here 
                {
                    levelDifficulty++;
                    greeting2();
                } else {
                    let repeatGame = () => {
                        let gameRepeat = prompt("CONGRATULATIONS! YOU BEAT LEVEL 10 AND UNLOCKED THE SAFE! TO PLAY AGAIN, TYPE: \n\n \"PLAY AGAIN\" \n\n TO END GAME, TYPE: \n\n\"END GAME\"");

                        if (gameRepeat === "PLAY AGAIN") {
                            levelDifficulty = 1;
                            levelRepeats = 0;
                            gameLog = 0;
                            greeting2();
                        } else {
                            alert("OK! COME BACK AND PLAY AGAIN SOMETIME. TO LOOK AT YOUR GAME LOG, PRESS CNTRL + SHIFt + J");
                            console.log(gameLog);
                        }
                    }
                    repeatGame();
                }
            }
            levelIncreasing();
        } else {
            let levelSame = () => {
                alert("Those were the wrong values. The correct values were: \n\n " + random1 + ", " + random2 + ", " + random3 + "\n\nThis level is restarting...Good luck!");

                greeting2();
            }
            levelSame();
        }
    }
}

greetUser();