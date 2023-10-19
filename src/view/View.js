import { Console } from "@woowacourse/mission-utils";

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.GAME_START_COMMENT = '숫자 야구 게임을 시작합니다.';
    this.INPUT_NUMBER_COMMENT = '숫자를 입력해주세요 : ';
    this.INPUT_NUMBER_ERROR = '--입력창 오류-- 1부터 9사이의 서로 다른 3개의 숫자를 선택해주세요!!'
    this.CORRECT_NUMBER = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    this.RESTART_INPUT_COMMENT = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    this.RESTART_INPUT_ERROR = '--입력창 오류-- 1(재시작) 또는 2(게임 종료)만 눌러주세요!!';
    this.GAME_OVER_COMMENT = '이용해주셔서 감사합니다. 게임을 종료합니다.';
  }

  printInputNumberError() {
    throw new Error(this.INPUT_NUMBER_ERROR);
  }

  async getUserInput() {
    const userInput = Console.readLineAsync(this.INPUT_NUMBER_COMMENT);

    this.controller.updateUserInputNumber(userInput);
    this.controller.isUserInputValid();
  }
}