import RATES from "../rates";
import STAGES from "../stages";

class Client {
  constructor() {
    this.goals = ["Collect rocks", "Build a castle", "Create infrastructure"];
  }

  processStage(stage) {
    switch (stage) {
      case STAGES.PLAN:
        this.createSprintRequirements();
        break;
      case STAGES.DEMONSTRATE:
    }
  }

  createSprintRequirements() {
    console.log("The client is creating current sprint requirements.");

    let sprintGoal = null;

    // Client can either require to accomplish the initial goals
    // or create a new intermediate goal
    if (Math.random() > 0.5) {
      sprintGoal = this.goals.shift();
    } else {
      // Agile makes it possible to add new intermediate goals during the development process
      sprintGoal = "Adapt to the current market by creating ...";
    }

    return sprintGoal;
  }

  rateAccomplishedWork() {
    const rates = Object.values(RATES);
    const rate = rates[Math.floor(Math.random() * 2)];

    // Client can change the requirements during the
    // development process based on the intermediate result
    switch (rate) {
      case RATES.AWESOME:
        break;
      case RATES.BAD:
        this.goals.unshift("Do some important stuff");
        break;
    }
  }
}

export default Client;
