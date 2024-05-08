import jwt from "jsonwebtoken";

export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

if(!token) {
  return res.status(401).send("Unauthorized");
 }

 try{
   const decoded = jwt.verify(token, process.env.JWT_KEY);
   req.user = decoded;
   next();
 }catch(e){
   return res.status(401).send("Invalid token");
 };

export default verify;