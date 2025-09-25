import { createRouter } from "@tanstack/react-router";
import { r as routeTree } from "./routeTree.gen-4dDFUBYp.js";
import "react/jsx-runtime";
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
function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true
  });
  return router;
}
export {
  getRouter
};
