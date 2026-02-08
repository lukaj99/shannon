import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerStartPentest } from "./tools/start-pentest.js";
import { registerQueryPentest } from "./tools/query-pentest.js";
import { registerListPentests } from "./tools/list-pentests.js";

export function createServer(): McpServer {
  const server = new McpServer({
    name: "shannon-temporal",
    version: "1.0.0",
  });

  registerStartPentest(server);
  registerQueryPentest(server);
  registerListPentests(server);

  return server;
}
