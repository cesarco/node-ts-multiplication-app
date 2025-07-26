import { option } from "yargs";
import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("SaveFileUseCase", () => {
  /**
  * beforeEach(() => {
    // clean up
    fs.rmSync("outputs", { recursive: true });
  });
  *  */

  afterEach(() => {
    const outputFolderExists = fs.existsSync("outputs");
    if (outputFolderExists) fs.rmSync("outputs", { recursive: true });
  });

  test("should save file with default values", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt";
    const options = {
      fileContent: "This is a test content",
    };

    const result = saveFile.execute(options);
    expect(result).toBe(true);

    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);

    //fs.unlinkSync(filePath); // Clean up
  });

  test("shoul save file with custom values", () => {
    const options = {
      fileContent: "custom content",
      fileDestination: "custom-outputs/file-destination",
      fileName: "custom-file",
    };

    const saveFile = new SaveFile();
    const result = saveFile.execute(options);
    expect(result).toBe(true);

    const filePath = `${options.fileDestination}/${options.fileName}.txt`;
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });
});
