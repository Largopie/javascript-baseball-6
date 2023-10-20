import Computer from "../model/Computer.js";
import Player from "../model/Player.js";
import Validation from "../utils/Validation.js";
import View from "../view/View.js";

export default class Controller {
  constructor(isFirstGame) {
    this.isFirstGame = !!isFirstGame;
    this.view = new View(this);
    this.validation = new Validation();
    this.computer = new Computer();
    this.player = new Player();
  }

  updatePlayerNumber(playerInput) {
    this.player.setNumber(playerInput);
  }

  async isPlayerInputValid() {
    const VALIDATION_RESULT = await this.validation.getPlayerInputValidation(this.player.getNumber());

    if(!VALIDATION_RESULT) {
      await this.view.playerInputError();
    }

    await this.checkPlayerInput();
  }

  async checkPlayerInput() {
    const COMPUTER_NUMBER = this.computer.getNumber();
    const PLAYER_NUMBER = this.player.getNumber();
    let ballStrikeCounts = [0, 0];

    for(let i = 0; i < COMPUTER_NUMBER.length; i++) {
      if(PLAYER_NUMBER[i] === COMPUTER_NUMBER[i]) {
        ballStrikeCounts[1]+=1
      } else if(PLAYER_NUMBER[i] !== COMPUTER_NUMBER[i] &&
          COMPUTER_NUMBER.includes(PLAYER_NUMBER[i])
        ) {
          ballStrikeCounts[0]+=1
        }
    }
    
    this.view.printPlayerGuessResult(ballStrikeCounts);

    await this.checkEndGame(ballStrikeCounts);
  }

  async checkEndGame(ballStrikeCounts) {
    if(ballStrikeCounts[1] === 3) {
      this.view.printCorrectNumber();
      await this.view.getRestartInputNumber();
    }
    if(ballStrikeCounts[1] !== 3) {
      await this.view.getInputPlayerNumber();
    }
  }

  async isRestartInputValid(restartInput) {
    const RESTART_RESULT = await this.validation.getRestartInputValidation(restartInput);

    if(!RESTART_RESULT) {
      await this.view.printRestartError();
    }
    
    if(restartInput === '1') {
      await new Controller(false).init()
    }

    if(restartInput === '2') {
      this.view.printGameOver();
    }
  }

  async init() {
    if(this.isFirstGame) {
      this.view.printGameStart();
    }
    this.computer.chooseRandomNumber();
    await this.view.getInputPlayerNumber();
  }
}