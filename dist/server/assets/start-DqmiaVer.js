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
const createMiddleware = (options, __opts) => {
  const resolvedOptions = {
    type: "request",
    ...__opts || options
  };
  return {
    options: resolvedOptions,
    middleware: (middleware) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { middleware })
      );
    },
    inputValidator: (inputValidator) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { inputValidator })
      );
    },
    client: (client) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { client })
      );
    },
    server: (server) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { server })
      );
    }
  };
};
const createStart = (getOptions) => {
  return {
    getOptions: async () => {
      const options = await getOptions();
      return options;
    },
    createMiddleware
  };
};
function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true
  });
  return router;
}
const startInstance = createStart(() => {
  return {
    requestMiddleware: []
  };
});
export {
  getRouter,
  startInstance
};
