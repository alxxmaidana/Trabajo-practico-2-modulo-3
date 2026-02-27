import os from "os";

// Obtener la arquitectura del sistema
console.log("Arquitectura del sistema", os.arch());

// Obtener tipo de sistema operativo
console.log("Plataforma:", os.platform());

// Obtener cantidad total de memoria
console.log("Memoria total: ", os.totalmem());

// Obtener cantidad de memoria disponible
console.log("Memoria disponible:", os.freemem());

// Obtener información de la CPU
console.log("Información de la CPU: ", os.cpus);
