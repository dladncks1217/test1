import { hydrate } from "react-dom";
// import { hydrateRoot } from "react-dom/client";

import App from "./components/App";
import { fetchTodo } from "./fetch";
import React from "react";

async function main() {
  const result = await fetchTodo();
  const app = <App todos={result} />;
  const el = document.getElementById("root");

  hydrate(app, el);
}

main();
