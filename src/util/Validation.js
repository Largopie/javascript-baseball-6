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
      this.isUserInputValid = false;
    }
  }

  getUserInputValid(userInputNumber) {
    this.checkUserInputValidation(userInputNumber);
    return this.isUserInputValid;
  }


  checkRestartInputValidation(restartInputNumber) {
    if(restartInputNumber !== '1' && restartInputNumber !== '2') {
      this.isRestartInputValid = false;
    }
  }

  getRestartInputValid(restartInputNumber) {
    this.checkRestartInputValidation(restartInputNumber)
    return this.isRestartInputValid;
  }
}