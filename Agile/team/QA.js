import STAGES from "../stages";

class QA {
  constructor() {
    this.tickets = [];
  }

  processStage(stage) {
    switch (stage) {
      case STAGES.QA:
        this.getDevelopedTickets();
        this.testFeatures();
        break;
    }
  }

  getDevelopedTickets() {
    this.tickets = [
      "Some",
      "Tickets",
      "That",
      "Were",
      "Finished",
      "By",
      "Developers",
    ];
  }

  createBugTicket(bug) {
    console.log(`Creating bug ticket for this bug: ${bug}`);
  }

  testFeatures() {
    const currentFeature = this.tickets.pop();
    console.log(`I'm testing this feature: ${currentFeature}`);

    if (Math.random() > 0.5) {
      this.createBugTicket(currentFeature);
    }
  }
}

export default QA;
