import _ from "lodash";
import sum from "./calculations";

import "./style.css";
import icon from "./webpack.png";

function sumElement() {
  const el = document.createElement("div");
  el.innerHTML = `Sum Function: ${sum(4, 2323)}`;
  return el;
}

function imgElement() {
  const img = new Image();
  img.src = icon;
  return img;
}

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Helloooooooooooo", "asflehwlfwe ufhwoueh"], " ");
  element.classList.add("suatustyle");

  element.appendChild(sumElement());
  element.appendChild(imgElement());

  return element;
}

document.body.appendChild(component());
