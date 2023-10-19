import ComputerNumber from "../model/ComputerNumber.js";
import UserInputNumber from "../model/UserInputNumber.js";
import Validation from "../util/Validation.js";
import View from "../view/View.js";

export default class Controller {
  // 첫 게임 여부에 따라 게임 시작 메시지 출력 여부 구분.
  constructor(isFirstGame) {
    this.isFirstGame = isFirstGame;
    this.view = new View();
    this.computerNumber = new ComputerNumber();
    this.userInputNumber = new UserInputNumber();
    this.validation = new Validation();
  }

  /**
   * UserInputNumber 클래스에 유저가 입력한 숫자로 업데이트 해주는 메서드
   * @param {string[]} userNumber [유저가 입력한 숫자] 
   */
  updateUserInputNumber(userNumber) {
    this.userInputNumber.setNumber(userNumber);
  }

  /**
   * 유저가 입력한 input 값이 유효한지 확인 후 결과 확인
   */
  isUserInputValid() {
    const USER_INPUT_RESULT = this.validation.getUserInputValidation(
      this.userInputNumber.getNumber()
    )
    if(!USER_INPUT_RESULT) {
      this.view.printInputNumberError();
    }

    this.getInputUserResult();
  }

  /**
   * 유저가 입력한 input값에 따른 결과 가공 로직
   */
  getInputUserResult() {
    const COMPUTER = this.computerNumber.getNumber();
    const USER = this.userInputNumber.getNumber();
    let strikeBallCounts = [0, 0];

    for(let i = 0; i < COMPUTER.length; i++) {
      if(COMPUTER[i] === USER[i]) {
        strikeBallCounts[0] +=1;
      }
      
      if(COMPUTER[i] !== USER[i] && COMPUTER.includes(USER[i])) {
        strikeBallCounts[1] +=1;
      }
    }

    this.view.printUserInputResult(strikeBallCounts);
  }

  /**
   * 유저 입력 값에 따라 게임이 끝 끝났는지 판단 로직
   * @param {string} resultComment [유저 입력 결과]
   */
  isCorrect(resultComment) {
    if(resultComment === '3스트라이크') {
      this.view.printCorrectNumber();
      this.view.getRestartInput();
    } else if(resultComment !== '3스트라이크') {
      this.view.getUserInput();
    }
  }
}