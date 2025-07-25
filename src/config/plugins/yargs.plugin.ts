import yargs, { hide } from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Base number for calculations",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    description: "Limit for the calculations",
  })
  .option("s", {
    alias: "showTable",
    type: "boolean",
    default: false,
    description: "Show detailed output",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "File name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })

  .check((argv, options) => {
    if (argv.l < 1) {
      throw new Error("Limit must be a positive number");
    }
    if (argv.b < 1) {
      throw new Error("Base must be a positive number");
    }
    return true;
  })
  .parseSync();
