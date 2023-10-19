export default class Validation {
  constructor() {
    this.numberRangeValidation = /^[1-9]+$/;
    this.userInputValidation = true;
    this.restartInputValidation = true;
  }

  checkUserInputValid(userInput) {
    const USER_INPUT_LENGTH = userInput.length;
    const USER_INPUT_TO_SET_LENGTH = new Set(userInput).size;
    const USER_INPUT_TO_NUMBER = +userInput.join('');
    if(this.numberRangeValidation.test(USER_INPUT_TO_NUMBER) ||
      USER_INPUT_LENGTH !== 3 ||
      USER_INPUT_TO_SET_LENGTH !== 3
    ) {
      this.userInputValidation = false;
    }
  }

  getUserInputValidation(userInput) {
    this.checkUserInputValid(userInput)
    return this.userInputValidation;
  }
}