import ROLES from "./roles";
import STAGES from "./stages";

class Agile {
  constructor(client, developers, scrumMaster, qa) {
    this.client = client;
    this.developers = developers;
    this.scrumMaster = scrumMaster;
    this.qa = qa;

    this.stage = STAGES.START;
    this.participators = [];
  }

  static getNextStage(currentStage) {
    let nextStage = null;
    const participators = [];

    switch (currentStage) {
      case STAGES.START:
      case STAGES.SPRINT_END:
        nextStage = STAGES.PLAN;
        participators.push(ROLES.CLIENT, ROLES.SCRUM_MASTER, ROLES.DEVELOPERS);
        break;
      case STAGES.PLAN:
        nextStage = STAGES.DEVELOP;
        participators.push(ROLES.DEVELOPERS);
        break;
      case STAGES.DEVELOP:
        nextStage = STAGES.TEST;
        participators.push(ROLES.QA);
        break;
      case STAGES.TEST:
        nextStage = STAGES.DEMONSTRATE;
        participators.push(ROLES.CLIENT, ROLES.SCRUM_MASTER, ROLES.DEVELOPERS);
        break;
      case STAGES.DEMONSTRATE:
        nextStage = STAGES.SPRINT_END;
        participators.push(ROLES.CLIENT, ROLES.SCRUM_MASTER, ROLES.DEVELOPERS);
        break;
    }

    return { nextStage, participators };
  }

  nextStage() {
    const { nextStage, participators } = Agile.getNextStage(this.stage);
    this.nextStage = nextStage;
    this.participators = participators;
  }

  processCurrentStage() {
    this.participators.forEach((participator) => {
      participator.processStage(this.stage);
    });
  }
}

export default Agile;
