import { jsxs, Fragment, jsx } from "react/jsx-runtime";
function RouteComponent() {
  const appName = "first-tanstack";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: appName }),
    /* @__PURE__ */ jsx("div", { children: 'Hello "/root"!' })
  ] });
}
export {
  RouteComponent as component
};
