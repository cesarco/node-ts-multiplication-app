//import { yarg } from "./yargs.plugin";

/*const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import("./yargs.plugin");
  return yarg;
};

describe("Test args.plugin.ts", () => {
  const originalArgv = process.argv;
  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("should return default values", async () => {
    //console.log(yarg);
    const argv = runCommand([
      "--b",
      "5",
      "--l",
      "10",
      "--s",
      "false",
      "--n",
      "table",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "table",
        d: "outputs",
      })
    );

    //console.log(argv);
    //expect(yarg.base).toBe(5);
    //expect(yarg).toBe(5);
  });

  test("should return configuration with custom values", async () => {
    const argv = runCommand([
      "--b",
      "3",
      "--l",
      "5",
      "--s",
      "true",
      "--n",
      "custom-table",
      "--d",
      "custom-outputs",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 3,
        l: 5,
        s: true,
        n: "custom-table",
        d: "custom-outputs",
      })
    );
  });
});*/


