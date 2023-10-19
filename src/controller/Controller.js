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
}