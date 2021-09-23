import STAGES from "../stages";

class QA {
  processStage(stage) {
    switch (stage) {
      case STAGES.TEST:
        return this.test();
    }
  }

  test() {
    console.log("Testing the application features.");
  }
}

export default QA;
