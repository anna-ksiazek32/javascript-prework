function getMoveName(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      } else if (argMoveId == 2){
            return 'papier';
      } else if (argMoveId == 3) {
            return 'nożyce';
      } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
      }
    }

function displayResult(argComputerMove, argPlayerMove){
      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            return 'Ty wygrywasz';
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            return 'Ty wygrywasz';
      } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            return 'Ty wygrywasz';
      } else if( argComputerMove == argPlayerMove){
            return 'Remis';
      } else if(argPlayerMove == 'nieznany ruch'){
            return 'Nieznany ruch';
      } else {
            return 'Przegrywasz';
      }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3) {
    computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
    playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + argPlayerMove);

let result = displayResult(argComputerMove, argPlayerMove);

printMessage('Wynik: ' + result);


/* if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz');
  } else if(computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz');
  }  else if(computerMove == playerMove){
        printMessage('Remis');
  }  else if(playerMove == 'nieznany ruch'){
        printMessage('Nieznany ruch. Wybierz 1, 2 lub 3');
  } else {
        printMessage('Przegrywasz');
  } */