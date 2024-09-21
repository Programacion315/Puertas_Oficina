import express from 'express';
import DigestFetch from 'digest-fetch';
import cors from 'cors';  // Importa el paquete cors

const app = express();
const port = 8000;

// Habilita CORS para todas las solicitudes
app.use(cors());

const username = 'admin';
const password = 'Administrador1?';
const url = 'http://192.168.1.138/ISAPI/AccessControl/RemoteControl/door/1';

app.use(express.json());

app.put('/abrir-puerta', async (req, res) => {

  console.log("Abrir las puertas!");

  try {
    // Crear instancia de DigestFetch
    const client = new DigestFetch(username, password);

    // Realizar la solicitud PUT
    const response = await client.fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: `
        <RemoteControlDoor>
          <cmd>open</cmd>
        </RemoteControlDoor>
      `,
    });

    if (response.ok) {
      res.status(200).send('Puerta abierta con éxito');
    } else {
      res.status(response.status).send('Error al abrir la puerta');
    }
  } catch (error) {
    console.error('Error al abrir la puerta:', error);
    res.status(500).send('Error al intentar abrir la puerta');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
