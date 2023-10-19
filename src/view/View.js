import { Console } from '@woowacourse/mission-utils';

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.GAME_START_COMMENT = '숫자 야구 게임을 시작합니다.';
    this.INPUT_COMMENT = '숫자를 입력해주세요 : ';
    this.SUCCESS_COMMENT = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    this.ERROR_COMMENT =
      '입력 숫자 오류!! 1부터 9까지 서로 다른 수로 이루어진 3자리 숫자를 입력하세요!';
    this.RESTART_ERROR_COMMENT =
      '재시작 입력 숫자 오류!! 1(게임 재시작) 또는 2(게임 종료)만 입력 가능합니다!';
    this.END_GAME = '게임 종료. 프로그램을 종료합니다.';
  }

  async getUserInput() {
    const userInput = await Console.readLineAsync(this.INPUT_COMMENT);
    if(!this.controller.userInputValidation(userInput)) {
      throw new Error(this.ERROR_COMMENT);
    }

    this.controller.updateUserInputNumber(userInput);
  }

  printUserInputAfterResult([strike, ball]) {
    let resultComment = '';

    if(strike) resultComment += `${strike}스트라이크`;

    if(ball) resultComment += `${ball}볼`;

    if(!ball & !strike) resultComment += '낫싱';

    Console.print(resultComment);
    this.controller.isGameFinish(resultComment);
  }

  printSuccessComment() {
    Console.print(this.SUCCESS_COMMENT);
  }
}