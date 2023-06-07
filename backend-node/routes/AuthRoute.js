import { Router } from "express";
import { login, register } from "../controllers/AuthController.js";
import { body } from "express-validator";
import { validation } from "../middlewares/validation.js";

const router = Router();

router.post(
  "/register",
  [
    body("email", "Email no valido").trim().isEmail().normalizeEmail(),
    body("password", "El password tiene que tener mas de 6 caracteres ")
      .trim()
      .isLength({ min: 6 }),
    body("password", "Password no coincide").custom((value, { req }) => {
      if (value !== req.body.repassword)
        throw new Error("No coincide las contraseñas");
      return value;
    }),
  ],
  validation,
  register
);

router.post(
  "/login",
  [
    body("email", "Email no valido").trim().isEmail().normalizeEmail(),
    body("password", "El password tiene que tener mas de 6 caracteres ")
      .trim()
      .isLength({ min: 6 }),
  ],
  validation,
  login
);

export default router;
