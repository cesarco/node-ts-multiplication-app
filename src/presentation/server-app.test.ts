import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { ServerApp } from "./server-app";

describe("Server App", () => {
  test("should create ServerApp Instance", () => {
    const serverApp = new ServerApp();
    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });

  test("should run ServerApp with options", () => {
    const logSpy = jest.spyOn(console, "log");
    const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute');
    
    const options = {
        base: 5,
        limit: 10,
        showTable: false,
        name: "test-table",
        destination: "test-outputs",
    };
    ServerApp.run(options);
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect( createTableSpy ).toHaveBeenCalledTimes(1);
    expect( createTableSpy ).toHaveBeenCalledWith({ base: 5, limit: 10 });

    //expect(logSpy).toHaveBeenCalledWith("File created successfully");
  });
});
