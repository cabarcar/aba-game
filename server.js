const express = require('express');
const path = require('path');
const app = express();

// Aquí ajustamos la ruta para apuntar al subdirectorio 'browser'
const directoryPath = path.join(__dirname, 'dist', 'aba-game', 'browser');
app.use(express.static(directoryPath));

app.get('/*', function(req, res) {
    // Asegúrate de que el path para enviar el archivo sea el correcto
    res.sendFile(path.join(directoryPath, 'index.html'));
});

// El puerto sigue siendo el mismo, ya sea el asignado por Heroku o 8080 por defecto
app.listen(process.env.PORT || 8080);

