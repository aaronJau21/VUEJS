export const register = (req, res) => {
  console.log(req.body);
  res.json({
    msg: "register",
  });
};

export const login = (req, res) => {
  res.json({
    msg: "Login",
  });
};
