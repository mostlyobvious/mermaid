import { p as parser, f as flowDb } from "./flowDb-8715d60b.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-8a0fd5ff.js";
import { u as setConfig } from "./mermaid-ae6fd49a.js";
import "./graph-0a82f17a.js";
import "./index-0aee0172.js";
import "./layout-964c3798.js";
import "./clone-f3a8e56d.js";
import "./edges-696730af.js";
import "./createText-45c5ed8b.js";
import "./line-f6d35b8b.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-6f0a910d.js";
const diagram = {
  parser,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
