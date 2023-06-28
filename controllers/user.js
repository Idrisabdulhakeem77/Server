const register = (req, res) => {
  res.send("Sign Up Route");
};

const login = (req, res) => {
  res.send("Sign in Route");
};



module.exports = { register  , login}