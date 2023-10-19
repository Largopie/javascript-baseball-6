export default class Validation {
  constructor() {
    this.numberRangeValidation = /^[1-9]+$/;
    this.userInputValidation = true;
    this.restartInputValidation = true;
  }

  /**
   * 유저가 입력한 값이 유효한지 검증
   * @param {string[]} userInput [유저가 입력한 값]
   */
  checkUserInputValid(userInput) {
    const USER_INPUT_LENGTH = userInput.length;
    const USER_INPUT_TO_SET_LENGTH = new Set(userInput).size;
    const USER_INPUT_TO_NUMBER = +userInput.join('');
    if(!this.numberRangeValidation.test(USER_INPUT_TO_NUMBER) ||
      USER_INPUT_LENGTH !== 3 ||
      USER_INPUT_TO_SET_LENGTH !== 3
    ) {
      this.userInputValidation = false;
    }
  }

  /**
   * 유저가 입력한 값을 검증 후 검증 결과(true | false) 반환
   * @param {string[]} userInput [유저가 입력한 값]
   * @returns boolean
   */
  getUserInputValidation(userInput) {
    this.checkUserInputValid(userInput)
    return this.userInputValidation;
  }

  /**
   * 재시작 할 때 입력한 값이 유효한지 검증
   * @param {string[]} restartInput [재시작 여부 입력]
   */
  checkRestartInputValid(restartInput) {
    if(restartInput !== '1' && restartInput !== '2') {
      this.restartInputValidation = false;
    }
  }

  /**
   * 재시작 입력 값을 검증 후 검증 결과(true | false) 반환
   * @param {string[]} restartInput [재시작 여부 입력]
   * @returns 
   */
  getRestartInputValidation(restartInput) {
    this.checkRestartInputValid(restartInput);
    return this.restartInputValidation;
  }
}