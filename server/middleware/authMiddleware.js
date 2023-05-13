import Jwt from "jsonwebtoken";
import User from "../models/userModel";

const protect = async (req, res, next) => {
  let token;
  console.log(req.headers.authorization);
};
