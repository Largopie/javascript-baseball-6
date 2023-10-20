export default class Validation {
  constructor() {
    this.numberRangeRegex = /^[1-9]+$/
    this.playerInputValidation = true;
    this.restartInputValidation = true;
  }

  async validatePlayerInput(playerInput) {
    const PLAYER_INPUT_TO_SET = new Set(playerInput);

    if(!this.numberRangeRegex.test(+playerInput.join('')) ||
      playerInput.length !== 3 ||
      PLAYER_INPUT_TO_SET.size !== 3
    ) {
      this.playerInputValidation = false;
    }
  }

  async getPlayerInputValidation(playerInput) {
    await this.validatePlayerInput(playerInput);

    return this.playerInputValidation;
  }

  async validateRestartInput(restartInput) {
    if(restartInput !== '1' && restartInput !== '2') {
      this.restartInputValidation = false;
    }
  }

  async getRestartInputValidation(restartInput) {
    await this.validateRestartInput(restartInput);

    return this.restartInputValidation;
  }
}