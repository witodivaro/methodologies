import STAGES from "./stages";

class Waterfall {
  constructor(client, developers, pm, qa) {
    this.stage = null;
    this.client = client;
    this.developers = developers;
    this.pm = pm;
    this.qa = qa;
  }

  static getNextStage(currentStage) {
    switch (currentStage) {
      case STAGES.PLAN:
        return STAGES.DESIGN;
      case STAGES.DESIGN:
        return STAGES.DEVELOP;
      case STAGES.DEVELOP:
        return STAGES.TEST;
      case STAGES.TEST:
        return STAGES.SUPPORT;
      case STAGES.SUPPORT:
        return STAGES.SUPPORT;
      default:
        return STAGES.PLAN;
    }
  }

  getStageParticipants(stage) {
    switch (stage) {
      case STAGES.PLAN:
        return [this.client];
      case STAGES.DESIGN:
        return [this.developers];
      case STAGES.DEVELOP:
        return [this.developers];
      case STAGES.TEST:
        return [this.qa];
      case STAGES.SUPPORT:
        return [this.developers];
    }
  }

  nextStage() {
    const nextStage = this.getNextStage(this.stage);
    const participants = this.getStageParticipants(nextStage);

    participants.forEach((participant) => {
      participant.processStage(nextStage);
    });
  }
}

export default Waterfall;
