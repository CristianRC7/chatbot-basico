# bot-basico

Este proyecto es una aplicación web básica construida con Flask y React.

## Bibliotecas utilizadas

### Python

- [Flask](https://flask.palletsprojects.com/en/2.1.x/): Un micro marco de trabajo para desarrollar aplicaciones web en Python.
- [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/): Una extensión de Flask para manejar el recurso compartido de origen cruzado (CORS), permitiendo solicitudes AJAX a su aplicación Flask desde cualquier dominio.
- [random](https://docs.python.org/3/library/random.html): Una biblioteca estándar de Python para generar números aleatorios.
- [json](https://docs.python.org/3/library/json.html): Una biblioteca estándar de Python para trabajar con datos en formato JSON.
- [codecs](https://docs.python.org/3/library/codecs.html): Una biblioteca estándar de Python para trabajar con codificaciones de texto.

### React

- [React](https://reactjs.org/): Una biblioteca de JavaScript para construir interfaces de usuario.
- [React-DOM](https://reactjs.org/docs/react-dom.html): Proporciona métodos específicos del DOM que pueden ser utilizados en el nivel superior de tu aplicación como una salida del escape al DOM.
- [Vite](https://vitejs.dev/): Un entorno de desarrollo que sirve tu código a través de ES Module Imports durante el desarrollo y lo agrupa para producción.
- [ESLint](https://eslint.org/): Una herramienta de linting para JavaScript y JSX.
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): Reglas de linting de ESLint específicas de React.
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): Reglas de linting de ESLint para los Hooks de React.
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): Un plugin de ESLint para React Fast Refresh.

## Instalación

Para instalar las dependencias de Python, ejecuta:

pip install flask flask_cors

Para instalar las dependencias de React, ejecuta:
npm install

Ejecución
Para ejecutar la aplicación, primero inicia el servidor Flask con:
python app.py

Luego, en una nueva terminal, inicia la aplicación React con:
npm run dev
