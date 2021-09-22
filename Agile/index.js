import Agile from "./Agile";

import Client from "./team/Client";
import Developers from "./team/Developers";
import QA from "./team/QA";
import ScrumMaster from "./team/ScrumMaster";

const client = new Client();
const scrumMaster = new ScrumMaster();

const developers = new Developers();
const qa = new QA();

const agile = new Agile(client, developers, scrumMaster, qa);

// Run the development cycle until the product is finished
while (true) {
  agile.nextStage();
}
