import { p as e, f as o } from "./flowDb-c8f54af4.js";
import { f as t, g as a } from "./styles-387eddc4.js";
import { u as i } from "./mermaid-3f142303.js";
import "./graph-0c93d777.js";
import "./index-e60b1095.js";
import "./layout-d00274e9.js";
import "./clone-3d02efa0.js";
import "./edges-b552ef4a.js";
import "./createText-e61cd98a.js";
import "./line-6c59dc61.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./channel-747b1e91.js";
const M = {
  parser: e,
  db: o,
  renderer: t,
  styles: a,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, i({ flowchart: { arrowMarkerAbsolute: r.arrowMarkerAbsolute } }), t.setConf(r.flowchart), o.clear(), o.setGen("gen-2");
  }
};
export {
  M as diagram
};
