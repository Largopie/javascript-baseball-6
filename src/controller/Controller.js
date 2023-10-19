import View from '../view/View.js';
import ComputerNumber from '../model/ComputerNumber.js';
import UserInputNumber from '../model/UserInputNumber.js';
import Validation from '../util/Validation.js';

export default class Controller {
  constructor(isFirstGame) {
    this.view = new View(this);
    this.computerNumber = new ComputerNumber();
    this.userInputNumber = new UserInputNumber();
    this.validation = new Validation();
    this.isFirstGame = isFirstGame;
  }

  updateUserInputNumber(inputNumber) {
    this.userInputNumber.setNumber(inputNumber);
  }

  userInputValidation() {
    const validationResult = this.validation.getUserInputValid(this.userInputNumber.getNumber());
    if(!validationResult) {
      this.view.printErrorComment();
    }
    
    this.userInputAfterResult();
  }

  userInputAfterResult() {
    const computer = this.computerNumber.getNumber();
    const user = this.userInputNumber.getNumber();

    let strikeBallCount = [0, 0];

    for(let i = 0; i < computer.length; i++) {
      if(user[i] === computer[i]) strikeBallCount[0]+=1;
      
      if(user[i] !== computer[i] && user.includes(computer[i])) strikeBallCount[1]+=1;
    }

    this.view.printUserInputAfterResult(strikeBallCount);
  }

  userRestartValidation(inputNumber) {
    this.validation.checkRestartInputValidation(inputNumber);
    return this.validation.getRestartInputValid();
  }

  isGameFinish(resultComment) {
    if(resultComment === '3스트라이크') {
      this.view.printSuccessComment();
      this.view.printRestartComment();
    } else if(resultComment !== '3스트라이크') {
      this.view.getUserInput();
    }
  }

  checkGameOver(userInput) {
    const restartResult = this.validation.getRestartInputValid(userInput);
    if(!restartResult) {
      this.view.printRestartErrorComment();
    }
    
    if(userInput === '1') {
      new Controller(false).init();
    } else if(userInput === '2') {
      this.view.printGameOver();
    }
  }

  init() {
    if(this.isFirstGame) this.view.printStartComment();
    this.computerNumber.chooseRandomNumber();
    this.view.getUserInput();
  }
}

