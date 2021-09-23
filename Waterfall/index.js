import STAGES from "./stages";
import Client from "./team/Client";
import Developers from "./team/Developers";
import PM from "./team/PM";
import QA from "./team/QA";

import Waterfall from "./Waterfall";

const client = new Client(["Want", "to", "create", "a", "castle"]);
const developers = new Developers();
const pm = new PM();
const qa = new QA();

const project = new Waterfall(client, developers, pm, qa);

while (project.stage !== STAGES.SUPPORT) {
  project.nextStage();
}
