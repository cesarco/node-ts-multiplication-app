//import './app';
import { ServerApp } from "./presentation/server-app";

describe("Test App.ts", () => {
  test("should call Server.run with values", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = [
      "node",
      "app.js",
      "--base",
      "5",
      "--limit",
      "10",
      "--showTable",
      "false",
      "--name",
      "test-table",
      "--destination",
      "test-outputs",
    ];

    await import("./app");
    expect(serverRunMock).toHaveBeenCalledWith({
      base: 5,
      limit: 10,
      showTable: false,
      name: "test-table",
      destination: "test-outputs",
    });
  });
});
