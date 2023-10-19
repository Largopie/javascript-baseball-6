import View from '../view/View.js';
import ComputerNumber from '../model/ComputerNumber.js';
import UserInputNumber from '../model/UserInputNumber.js';
import Validation from '../util/Validation.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.computerNumber = new ComputerNumber();
    this.userInputNumber = new UserInputNumber();
    this.validation = new Validation();
  }

  updateUserInputNumber(inputNumber) {
    this.userInputNumber.setNumber(inputNumber);
  }

  userInputValidation(inputNumber) {
    this.validation.checkUserInputValidation(inputNumber);
    return this.validation.getUserInputValid();
  }

  userInputAfterResult() {
    const computer = this.computerNumber.getNumber();
    const user = this.userInputNumber.getNumber();

    const strikeBallCount = [0, 0];

    for(let i = 0; i < computer.length; i++) {
      if(user[i] === computer[i]) strikeBallCount[0]+=1;
      
      if(user[i] !== computer[i] && user.includes(computer[i])) strikeBallCount[1]+=1;
    }

    this.view.printUserInputAfterResult(strikeBallCount);
  }
}

