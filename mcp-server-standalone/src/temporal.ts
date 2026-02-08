import { Connection, Client } from "@temporalio/client";

let connection: Connection | undefined;
let client: Client | undefined;

export async function getClient(): Promise<Client> {
  if (!connection) {
    const address = process.env.TEMPORAL_ADDRESS ?? "localhost:7233";
    connection = await Connection.connect({ address });
    client = new Client({ connection });
  }
  return client!;
}
