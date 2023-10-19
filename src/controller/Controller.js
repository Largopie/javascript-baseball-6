import View from '../view/View';
import ComputerNumber from '../model/ComputerNumber';
import UserInputNumber from '../model/UserInputNumber';

export default class Controller {
  constructor() {
    this.view = new View();
    this.computerNumber = new ComputerNumber();
    this.userInputNumber = new UserInputNumber();
  }

  updateUserInputNumber(inputNumber) {
    this.userInputNumber.setNumber(inputNumber);
  }
}