import { p as parser, f as flowDb } from "./flowDb-d09e6a34.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-b17bc4d6.js";
import { p as setConfig } from "./mermaid-f9c79f24.js";
import "d3";
import "dagre-d3-es/src/graphlib/index.js";
import "./index-cc7f8ef1.js";
import "dagre-d3-es/src/dagre/index.js";
import "dagre-d3-es/src/graphlib/json.js";
import "./edges-119b5040.js";
import "./createText-269f123a.js";
import "mdast-util-from-markdown";
import "ts-dedent";
import "dagre-d3-es/src/dagre-js/label/add-html-label.js";
import "khroma";
import "dayjs";
import "@braintree/sanitize-url";
import "dompurify";
import "lodash-es/memoize.js";
import "lodash-es/merge.js";
import "stylis";
import "lodash-es/isEmpty.js";
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
