import jwt from "jsonwebtoken";

export const generateToken = id => {
  console.log("-----------generateToken--------------");
  console.log(jwt);
  return jwt.sign({ id }, "LgzZIWRTsGzgsVVT7vy9k1dcBP2jci0m");
};
