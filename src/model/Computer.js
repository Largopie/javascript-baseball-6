import { Random } from "@woowacourse/mission-utils";

export default class Computer {
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
    const numbers = [];
    
    while(numbers.length < 3) {
      const randomNumberString = String(Random.pickNumberInRange(1, 9));
      if(!numbers.includes(randomNumberString)) {
        numbers.push(randomNumberString);
      }
    }
    this.setNumber(numbers);
  }
}