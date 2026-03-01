import fs from "fs";

// Leer archivo de manera asíncrona
fs.readFile("fs-ejemplo/data/example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Contenido del archivo", data);
});

// Escribir en un nuevo archivo
let newFileContent = "Hola, soy un nuevo archivo";
fs.writeFile("fs-ejemplo/data/newfile.txt", newFileContent, (err) => {
    if (err) throw err;
    console.log("Archivo creado y escrito");
});
