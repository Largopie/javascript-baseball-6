import { Random } from "@woowacourse/mission-utils";

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
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9).toString();
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.setNumber(computer);
  }
}