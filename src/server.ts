import { createServer, IncomingMessage, ServerResponse } from "http";
import { createReadStream } from "fs";

import { renderToString } from "react-dom/server";
import { createElement } from "react";

import html from "../index.html";

import App from "./components/App";
import { fetchTodo } from "./fetch";

const PORT = 3000;

async function serverHandler(req: IncomingMessage, res: ServerResponse) {
  const { url } = req;

  switch (url) {
    case "/": {
      const result = await fetchTodo();

      const rootElement = createElement(
        "div",
        { id: "root" },
        createElement(App, { todos: result })
      );
      const renderResult = renderToString(rootElement);

      const htmlResult = html.replace("__placeholder__", renderResult);

      res.setHeader("Content-Type", "text/html");
      res.write(htmlResult);
      res.end();
      return;
    }

    case "/browser.js": {
      res.setHeader("Content-Type", "application/javascript");
      createReadStream("./dist/browser.js.map").pipe(res);
      return;
    }

    case "/browser.js.map": {
      res.setHeader("Content-Type", "application/javascript");
      createReadStream("./dist/browser.js.map").pipe(res);
      return;
    }

    default: {
      res.statusCode = 404;
      res.end("not found");
    }
  }
}

function main() {
  createServer(serverHandler).listen(PORT, () => {
    console.log(`${PORT}에 서버 실행중`);
  });
}

main();
