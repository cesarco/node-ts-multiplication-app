import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe("Server App", () => {
  const options = {
    base: 5,
    limit: 10,
    showTable: false,
    name: "test-table-5",
    destination: "test-outputs",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // test("should create ServerApp Instance", () => {
  //   const serverApp = new ServerApp();
  //   expect(serverApp).toBeInstanceOf(ServerApp);
  //   expect(typeof ServerApp.run).toBe("function");
  // });

  // test("should run ServerApp with options", () => {
  //   const logSpy = jest.spyOn(console, "log");
  //   const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
  //   const saveFileSpy = jest.spyOn(SaveFile.prototype, "execute");

  //   ServerApp.run(options);
  //   expect(logSpy).toHaveBeenCalledTimes(3);
  //   expect(createTableSpy).toHaveBeenCalledTimes(1);
  //   expect(createTableSpy).toHaveBeenCalledWith({ base: 5, limit: 10 });

  //   expect(saveFileSpy).toHaveBeenCalledTimes(1);
  //   expect(saveFileSpy).toHaveBeenCalledWith({
  //     fileContent: expect.any(String),
  //     fileDestination: options.destination,
  //     fileName: options.name,
  //   });

  //   //expect(logSpy).toHaveBeenCalledWith("File created successfully");
  // });

  test('should run with custom values mocked', () => {
    const logMock = jest.fn();
    const logErrorMock = jest.fn();
    const createMock = jest.fn().mockReturnValue('1 x 1 = 1');
    const saveFileMock = jest.fn().mockReturnValue(true);

    global.console.log = logMock;
    global.console.error = logErrorMock;

    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run(options)

    expect( logMock ).toHaveBeenCalledWith("Server is running...");
    expect( createMock ).toHaveBeenCalledWith({"base": options.base, "limit": options.limit});
    expect( saveFileMock ).toHaveBeenCalledWith({
      fileContent: '1 x 1 = 1',
      fileDestination: options.destination,
      fileName: options.name,
    });

    expect( logMock ).toHaveBeenCalledWith("File created successfully.");

  })


});
