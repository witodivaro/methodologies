import STAGES from "../stages";

class Client {
  constructor(requirements) {
    this.requirements = requirements;
  }

  processStage(stage) {
    switch (stage) {
      case STAGES.PLAN:
        this.decomposeRequirements();
    }
  }

  decomposeRequirements() {
    console.log("Decomposing my current requirements into smaller tasks");
  }
}

export default Client;
