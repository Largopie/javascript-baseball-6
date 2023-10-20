import Controller from "./controller/Controller.js";

class App {
  constructor() {
    this.controller = new Controller(true);
  }
  async play() {
    this.controller.init();
  }
}

export default App;
