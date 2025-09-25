import { jsx, jsxs } from "react/jsx-runtime";
import { createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import * as fs from "node:fs";
import { c as createServerFn, a as createServerRpc } from "../server.js";
const Route$3 = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      title: "TanStack Start Starter"
    }]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({
  children
}) {
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$2 = () => import("./root-o3gb9QHA.js");
const Route$2 = createFileRoute("/root")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BKu56Hl3.js");
const filePath = "./src/routes/count.txt";
async function readCount() {
  return parseInt(await fs.promises.readFile(filePath, "utf-8").catch(() => "0"));
}
const getCount_createServerFn_handler = createServerRpc("src_routes_index_tsx--getCount_createServerFn_handler", (opts, signal) => {
  return getCount.__executeServer(opts, signal);
});
const getCount = createServerFn({
  method: "GET"
}).handler(getCount_createServerFn_handler, () => {
  return readCount();
});
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  loader: async () => await getCount()
});
const $$splitComponentImporter = () => import("./_postId-dp0RmO_s.js");
const Route = createFileRoute("/posts/$postId")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const RootRoute = Route$2.update({
  id: "/root",
  path: "/root",
  getParentRoute: () => Route$3
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const PostsPostIdRoute = Route.update({
  id: "/posts/$postId",
  path: "/posts/$postId",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  RootRoute,
  PostsPostIdRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
export {
  Route$1 as R,
  Route as a,
  routeTree as r
};
