export default class Validation {
  constructor() {
    this.numberRange = /^[1-9]+$/;
    this.isUserInputValid = true;
    this.isRestartInputValid = true;
  }

  checkUserInputValidation(userInputNumber) {
    const userInputNumberLength = userInputNumber.length;
    const userInputNumberToSetLength = new Set(userInputNumber).size;
    if(!this.numberRange.test(+userInputNumber.join('')) || 
      userInputNumberLength !== 3 ||
      userInputNumberToSetLength !== userInputNumberLength
    ) {
      this.userInputValid = false;
    }
  }

  getUserInputValid() {
    return this.isUserInputValid;
  }

  checkRestartInputValidation(restartInputNumber) {
    if(restartInputNumber !== 1 && restartInputNumber !== 2) {
      this.isRestartInputValid = false;
    }
  }

  getRestartInputValid() {
    return this.isRestartInputValid;
  }
}