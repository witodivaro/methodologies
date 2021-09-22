import STAGES from "../stages";

class ScrumMaster {
  processStage(stage) {
    switch (stage) {
      // Whenever a sprint starts, the client & the developers team are gathered
      // to discuss new goals and ways to accomplish them
      case STAGES.PLAN:
        this.hostSprintPlanning();
        break;

      // On the develop stage, everyday scrum-meeting (standup) is held
      // It helps the developers team to detect tasks-blockers, problems
      // and keep everyone together, so that each member of the agile-driven product
      // has a same direction of the current plans resolving.
      case STAGES.DEVELOP:
        this.hostStandup();

      case STAGES.DEMONSTRATE:
        this.hostDemonstration();

      case STAGES.SPRINT_END:
        // Demonstration is required at the end of each sprint
        // It shows the client all the accomplished work
        // And shows the team the full view of the product
        this.hostDemonstration();

        // Retrospective helps to determine how to
        // increase the productivity of the developers team
        // It's maid to work on each others mistakes and prevent them
        // in the next sprint
        this.hostRetrospective();
    }
  }

  hostStandup() {
    console.log(`Gathering the developers team for a standup`);
  }

  hostDemonstration() {
    console.log(
      `Gathering the developers team & the client for a demonstration`
    );
  }

  hostRetrospective() {
    console.log(`Gathering the developers team for a retrospective`);
  }

  hostSprintPlanning() {
    console.log(`Gathering the developers team & client for a sprint plan`);
  }
}

export default ScrumMaster;
