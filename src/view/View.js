import { Console } from "@woowacourse/mission-utils";

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.GAME_START_MESSAGE = '숫자 야구 게임을 시작합니다';
    this.IN_GAME_INPUT_MESSAGE = '숫자를 입력해주세요 : ';
    this.CORRECT_NUMBER_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    this.RESTART_INPUT_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    this.ERROR = '[ERROR] 숫자가 잘못된 형식입니다.';
    this.GAME_OVER_MESSAGE = '게임을 종료합니다.';
  }

  async getInputPlayerNumber() {
    const playerInput = await Console.readLineAsync(this.IN_GAME_INPUT_MESSAGE);
    
    this.controller.updatePlayerNumber(playerInput.split(''));
    await this.controller.isPlayerInputValid();
  }

  async playerInputError() {
    throw new Error(this.ERROR);
  }

  printPlayerGuessResult([ball, strike]) {
    let resultComment = '';

    if(!ball && !strike) {
      resultComment+='낫싱'
    }
    
    if(ball) {
      resultComment+=`${ball}볼 `
    }

    if(strike) {
      resultComment+=`${strike}스트라이크`
    }

    Console.print(resultComment.trim());
  }

  printCorrectNumber() {
    Console.print(this.CORRECT_NUMBER_MESSAGE);
  }

  async getRestartInputNumber() {
    const restartInput = await Console.readLineAsync(this.RESTART_INPUT_MESSAGE);
    
    await this.controller.isRestartInputValid(restartInput);
  }

  async printRestartError() {
    throw new Error(this.ERROR+'재시작오류');
  }

  printGameOver() {
    Console.print(this.GAME_OVER_MESSAGE);
  }

  printGameStart() {
    Console.print(this.GAME_START_MESSAGE);
  }
}