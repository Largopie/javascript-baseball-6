import { Random } from "@woowacourse/mission-utils";

/**
 * 컴퓨터(Model)에 관련된 클래스.
 * 컴퓨터가 임의로 선택한 3개의 수 구현 및 상태 관리
 */
export default class ComputerNumber {
  constructor() {
    this.number = null;
  }

  getNumber() {
    return this.number;
  }

  setNumber(newNumber) {
    this.number = newNumber;
  }

  chooseRandomNumber() {
    const NUMBER_ARR = [];

    while(NUMBER_ARR.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9).toString();
      if(!NUMBER_ARR.includes(NUMBER)) NUMBER_ARR.push(NUMBER);
    }
    this.setNumber(NUMBER_ARR);
  }
}