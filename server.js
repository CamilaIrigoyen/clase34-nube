import express from "express";
const app = express();

//LOGIN
app.get("/", (req, res) => {
  res.end("Hola compañeros developers...!!!");
});

//SERVIDOR
const PORT =3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.on("error", (error) => {
  console.log(`Error en servidor: ${error}`);
});