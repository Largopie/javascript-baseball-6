import { Console } from "@woowacourse/mission-utils";

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.GAME_START_COMMENT = '숫자 야구 게임을 시작합니다.';
    this.INPUT_NUMBER_COMMENT = '숫자를 입력해주세요 : ';
    this.INPUT_NUMBER_ERROR = '[ERROR] 1부터 9사이의 서로 다른 3개의 숫자를 선택해주세요!!'
    this.CORRECT_NUMBER = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    this.RESTART_INPUT_COMMENT = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    this.RESTART_INPUT_ERROR = '[ERROR] 1(재시작) 또는 2(게임 종료)만 눌러주세요!!';
    this.GAME_OVER_COMMENT = '게임 종료';
  }

  /**
   * input 값이 유효하지 않을 시 에러 출력
   */
  printInputNumberError() {
    throw new Error(this.INPUT_NUMBER_ERROR);
  }

  /**
   * 유저가 시도한 input을 받은 후 유효성을 검증하는 로직
   */
  async getUserInput() {
    try {
      const USER_INPUT = await Console.readLineAsync(this.INPUT_NUMBER_COMMENT);
      this.controller.updateUserInputNumber(USER_INPUT.split(''));
      this.controller.isUserInputValid();
    } catch (error) {
      Console.print('[ERROR]');
    }
  }

  /**
   * 볼과 스트라이크 개수에 따른 출력 후 게임이 끝났는지 여부 확인
   * @param {number[]} param [스트라이크 수, 볼 수]
   */
  printUserInputResult([strike, ball]) {
    let resultComment = '';
    
    if (!strike && !ball) {
      resultComment += "낫싱";
    }

    if (ball) {
      resultComment += `${ball}볼 `;
    }
    if (strike) {
      resultComment += `${strike}스트라이크`;
    }

    Console.print(resultComment.trim());
  }

  /**
   * 입력한 값이 정답일 때 문구 출력
   */
  printCorrectNumber() {
    console.log(this.CORRECT_NUMBER);
  }

  /**
   * 재시작 여부 입력한 값이 유효하지 않을 때 에러 발생
   */
  printRestartInputError() {
    throw new Error(this.RESTART_INPUT_ERROR);
  }

  /**
   * 재시작 여부 입력 받아 재시작 여부 판별 로직으로 보냄
   */
  async getRestartInput() {
    const RESTART_INPUT = await Console.readLineAsync(this.RESTART_INPUT_COMMENT);
    
    this.controller.isRestartInputValid(RESTART_INPUT);
  }

  /**
   * 게임 종료 문구 출력 후 종료
   */
  printGameOver() {
    Console.print(this.GAME_OVER_COMMENT);
  }

  printGameStart() {
    console.log(this.GAME_START_COMMENT);
  }
}