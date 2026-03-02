import http from "http";

// Crear un servidor http básico
const server = http.createServer((res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("¡Hola mundo!");
});

// Configurar el sevidor para que escuche el puerto 3000
server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor corriendo en http://127.0.0.1:300");
});