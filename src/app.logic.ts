// desarrollar la tabla de multiplicar del 5 y guardarlo en un archivo llamado tabla5.txt
import { writeFile } from "fs/promises";
import { yarg } from "./config/plugins/yargs.plugin";
import { number } from "yargs";


// del yarg se debe obtener el base y el limit y show

const base: number = Number(yarg.base);
const limit: number = Number(yarg.limit);
const show: boolean = Boolean(yarg.show);
 

const generateMultiplicationTable = async (
  base: number,
  limit: number
): Promise<string> => {
  let table = `===============================\nTabla de multiplicar del ${base}\n===============================\n`;

  for (let i = 1; i <= limit; i++) {
    table += `${base} x ${i} = ${base * i}\n`;
  }

  if (show) {
    console.log("Tabla de multiplicar:");
    console.log(table);
  }
  console.log('File created');

  return table;
};

const saveTableToFile = async (
  table: string,
  filename: string
): Promise<void> => {
  try {
    //const outputPath = `outputs/${filename}`;

    await writeFile(filename, table);
    console.log(`Tabla de multiplicar guardada en ${filename}`);
  } catch (error) {
    console.error(
      `Error al guardar la tabla en el archivo ${filename}:`,
      error
    );
  }
};

const main = async (base: number, limit: number, show: boolean) => {
  const table = await generateMultiplicationTable(base, limit);
  await saveTableToFile(table, `tabla-${base}.txt`);
};

main(base, limit, show).catch((error) => {
  console.error("Error en la ejecución del programa:", error);
  process.exit(1);
});
