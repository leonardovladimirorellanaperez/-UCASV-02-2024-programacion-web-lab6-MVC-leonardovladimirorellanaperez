const router = require("express").Router();
const { addUserController, showForm, showAllUsers } = require("../controllers/user.controller");

// Ruta para mostrar el formulario de ingreso de usuario
router.get("/", showForm);

// Ruta para manejar la creación de un nuevo usuario
router.post("/home", addUserController);

// Ruta para mostrar todos los usuarios
router.get("/allUsers", showAllUsers); // showAllUsers debe estar correctamente definido

module.exports = router;
