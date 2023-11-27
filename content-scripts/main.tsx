import { createRoot } from "react-dom/client";
import { App } from "./App";

const getNode = () => {
  const h3Elements = document.querySelectorAll("h3"); // 모든 <h3> 요소를 선택합니다.

  for (const h3Element of h3Elements) {
    if (h3Element.textContent === "Install") {
      const nextSibling = h3Element.nextElementSibling;
      if (nextSibling) {
        return nextSibling;
      }
    }
  }
};
const node = getNode()!;
const root = createRoot(node);
const name = node.querySelector("code")?.innerText.split(" ")[2] ?? "";
root.render(<App name={name} />);
