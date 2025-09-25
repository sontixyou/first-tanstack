import { jsx, jsxs } from "react/jsx-runtime";
import { a as Route } from "./routeTree.gen-4dDFUBYp.js";
import "@tanstack/react-router";
import "node:fs";
import "../server.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
function RouteComponent() {
  const {
    postId
  } = Route.useParams();
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { children: [
    "Post: ",
    postId
  ] }) });
}
export {
  RouteComponent as component
};
