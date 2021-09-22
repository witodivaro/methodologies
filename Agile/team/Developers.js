import STAGES from "../stages";

class Developers {
  constructor() {
    this.tasks = [];
  }

  getTasksFromBacklog() {
    this.tasks = ["Some", "New", "Tasks", "From", "Backlog"];
  }

  processStage(stage) {
    switch (stage) {
      case STAGES.PLAN:
        this.evaluateTasksRequiredTime();
        break;
      case STAGES.DEVELOP:
        this.getTasksFromBacklog();
        this.develop();
        break;
      case STAGES.TEST:
        this.getTasksFromBacklog();
        this.fixBugs();
        break;
      case STAGES.DEMONSTRATE:
        this.showAccomplishedWork();
        break;
    }
  }

  develop() {
    const currentTask = this.tasks.pop();
    console.log(`I'm working on this task: ${currentTask}`);
  }

  fixBugs() {
    const currentBug = this.tasks.pop();
    console.log(`I'm fixing this bug: ${currentBug}`);
  }

  evaluateTasksRequiredTime() {
    return Math.floor(Math.random() * 10);
  }

  showAccomplishedWork() {
    console.log(`I'm showing the work I've done`);
  }
}

export default Developers;
