import { jsxs } from "react/jsx-runtime";
import * as fs from "node:fs";
import { useRouter } from "@tanstack/react-router";
import { R as Route } from "./routeTree.gen-4dDFUBYp.js";
import { c as createServerFn, a as createServerRpc } from "../server.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
const filePath = "./src/routes/count.txt";
async function readCount() {
  return parseInt(await fs.promises.readFile(filePath, "utf-8").catch(() => "0"));
}
const updateCount_createServerFn_handler = createServerRpc("src_routes_index_tsx--updateCount_createServerFn_handler", (opts, signal) => {
  return updateCount.__executeServer(opts, signal);
});
const updateCount = createServerFn({
  method: "POST"
}).inputValidator((d) => d).handler(updateCount_createServerFn_handler, async ({
  data
}) => {
  const count = await readCount();
  await fs.promises.writeFile(filePath, `${count + data}`);
  return count + data;
});
function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("button", { type: "button", onClick: async () => {
    try {
      await updateCount({
        data: 1
      });
      router.invalidate();
    } catch (error) {
      console.error("Error updating count:", error);
    }
  }, children: [
    "Add 1 to ",
    state,
    "?"
  ] });
}
export {
  Home as component
};
