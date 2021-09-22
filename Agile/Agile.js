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

  static getStageParticipants(stage) {
    const participants = [];
    switch (stage) {
      case STAGES.PLAN:
      case STAGES.START:
      case STAGES.SPRINT_END:
      case STAGES.DEMONSTRATE:
        participants.push(ROLES.CLIENT, ROLES.SCRUM_MASTER, ROLES.DEVELOPERS);
      case STAGES.TEST:
        participants.push(ROLES.QA);
      case STAGES.DEVELOP:
        participants.push(ROLES.DEVELOPERS);
    }
  }

  static getNextStage(currentStage) {
    let nextStage = null;

    switch (currentStage) {
      case STAGES.START:
      case STAGES.SPRINT_END:
        nextStage = STAGES.PLAN;
        break;
      case STAGES.PLAN:
        nextStage = STAGES.DEVELOP;
        participators.push(ROLES.DEVELOPERS);
        break;
      case STAGES.DEVELOP:
        nextStage = STAGES.TEST;
        break;
      case STAGES.TEST:
        nextStage = STAGES.DEMONSTRATE;
        break;
      case STAGES.DEMONSTRATE:
        nextStage = STAGES.SPRINT_END;
        break;
    }

    return nextStage;
  }

  nextStage() {
    this.nextStage = Agile.getNextStage(this.stage);
    this.participators = Agile.getStageParticipants(this.nextStage);
  }

  processCurrentStage() {
    this.participators.forEach((participator) => {
      participator.processStage(this.stage);
    });
  }
}

export default Agile;
