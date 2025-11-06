import bcrypt from "bcrypt";
import prisma from '../lib/prisma.js';

export const register = async(req, res) => {
    // Registration logic here
    const {username ,email,password}=req.body;
    //HASH THE PASSWORD
    const hashedPassword= await bcrypt.hash(password,10);
  console.log(hashedPassword);
  //CREATE A NEW USER AND SAVE IT IN DB
   const newUser = await prisma.user.create({
    data:{
        username,
        email,  
        password:hashedPassword
    },
   });
  console.log(newUser);
};
export const login = (req, res) => {
    // Login logic here
    res.send("User logged in");
}
export const logout = (req, res) => {
    // Logout logic here
    res.send("User logged out");
}
