import STAGES from "../stages";

class PM {
  processStage(stage) {
    switch (stage) {
      case STAGES.DEVELOP:
        return this.organisePersonalMeeting();
    }
  }

  organisePersonalMeeting() {
    console.log('Hosting 1-1 with the developer to determine his current state');
  }

}

export default PM;
