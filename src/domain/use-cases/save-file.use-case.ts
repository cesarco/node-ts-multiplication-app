import fs from "fs";
import path from "path";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /**
   *  repository for saving files
   */ {}

  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: Options): boolean {
    const outputPath = fileDestination;
    const outputFileName = fileName;
    const filePath = `${outputPath}/${outputFileName}.txt`;

    try {
      fs.mkdirSync(outputPath, { recursive: true });
      fs.writeFileSync(filePath, fileContent);
      console.log(`File saved to ${filePath}`);
      return true;
    } catch (error) {
      console.error(`Error saving file: ${error}`);
      return false;
    }
  }
}
