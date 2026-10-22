# Articulo-492-form

Formularios web para la administración de carpetas de clientes (persona física y persona moral), servidos por una aplicación Node.js con Express.

## Estructura

- `a942/a492_p_fisica.html` — formulario para persona física con selector de archivos.
- `a942/a492_p_moral.html` — formulario de gestión de carpetas para persona moral.
- `a942/demo.html` — cuestionario de demostración con lógica jQuery.
- `a942/css/styles.css` — estilos del formulario.
- `server.js` — servidor Express que publica el directorio `a942`.

## Instalación

```sh
npm install
```

Requiere Node.js (ver `engines` en `package.json`).

## Uso

```sh
npm start
```

Abre `http://localhost:3000` en el navegador (o el puerto indicado por la variable de entorno `PORT`). La página principal muestra el formulario de persona física; los formularios de persona moral y de demostración están disponibles en `/a492_p_moral.html` y `/demo.html`.

## Licencia

Apache-2.0 (ver `package.json`).
