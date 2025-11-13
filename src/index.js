// Calls necessary logic to initialize the application

import "./styles.css";
import AppController from "./appcontroller.js";

const app = AppController();
app.init();

window.app = app;