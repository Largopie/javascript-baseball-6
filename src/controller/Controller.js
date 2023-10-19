import ComputerNumber from "../model/ComputerNumber.js";
import UserInputNumber from "../model/UserInputNumber.js";
import View from "../view/View.js";

export default class Controller {
  // 첫 게임 여부에 따라 게임 시작 메시지 출력 여부 구분.
  constructor(isFirstGame) {
    this.isFirstGame = isFirstGame;
    this.view = new View();
    this.computerNumber = new ComputerNumber();
    this.userInputNumber = new UserInputNumber();
  }

  /**
   * UserInputNumber 클래스에 유저가 입력한 숫자로 업데이트 해주는 메서드
   * @param {string[]} userNumber [유저가 입력한 숫자] 
   */
  updateUserInputNumber(userNumber) {
    this.userInputNumber.setNumber(userNumber);
  }
}