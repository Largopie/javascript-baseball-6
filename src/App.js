import { Console } from '@woowacourse/mission-utils';

class App {
  async throwError(input) {
    const e = new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    throw e;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    
    try {
      const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
      await this.throwError(userInput);
      
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
