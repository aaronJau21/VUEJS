import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });

    await user.save();

    return res.status(201).json({
      ok: true,
    });
  } catch (err) {
    // console.log(err.code);
    if (err.code === 11000)
      return res.status(400).json({ error: "Ya existe este usuario" });

    return res.status(500).json({ error: "Error de servidor" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) return res.status(403).json({ error: "No existe el usuario" });

    const respPassword = await user.comparePassword(password);

    if (!respPassword)
      return res.status(403).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign({ uid: user.id }, process.env.JWT_SECRET);

    return res.json({
      ok: true,
      token
    });
  } catch (e) {
    console.log(e);

    return res.status(500).json({ error: "Error de servidor" });
  }
};
