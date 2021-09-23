import STAGES from "../stages";

class Developers {
  constructor() {
    this.tasks = [];
  }

  processStage(stage) {
    switch (stage) {
      case STAGES.DESIGN:
        return this.design();
      case STAGES.DEVELOP:
        return this.develop();
      case STAGES.SUPPORT:
        return this.support();
    }
  }

  design() {
    this.tasks.push(
      "Tasks",
      "that",
      "are",
      "initialized",
      "on",
      "the",
      "start",
      "and",
      "never",
      "changed"
    );
  }

  develop() {
    const task = this.tasks.pop();
    console.log(`Working on the task: ${task}`);
  }

  support() {
    console.log("Supporting the current application state.");
  }
}

export default Developers;
