let userName = prompt('Please Enter your Name');
    alert ('Welcome! you shred! ' + userName);
     console.log(typeof userName);
     document.write ("Welcome to sweet bliss, " + userName);

let userMusic = prompt('Do you love music?');

    alert (userMusic + ' ...? If you havent, you should listen to The Mars Volta'  );
      console.log(typeof userMusic);

let userChoice = prompt('Who is your favorite band?');
    alert (userChoice + 'Is cool and all...but do you even lift?');
    console.log(typeof userChoice);

let question = prompt("Do you think Gaz should be considered a state of mind? 'yes or no'? ");
    let answer2question = prompt(question);
    let rightAnswer = 'yes';

    while (answer2question !== rightAnswer){
        answer2question = prompt('Think again hotshot');
        console.log(typeof question);
    }
    alert("correct answer");