// main.js --> entry point

import { createElement } from "./createElement";
import { render } from "./render";

const el = document.querySelector("div#root");

const span = createElement(
    "span",
    {},
    "CodeWithLaksh"
);


const a = createElement(
  'a',
  {
    href: "https://www.youtube.com/@codewithlaksh1850",
    target: "_blank"
  },
  [span]
)

render(el, a);
