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
}