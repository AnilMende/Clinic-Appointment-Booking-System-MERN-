import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        })
};


export const registerAdmin = async (req, res) => {
    const { username, email, password } = req.body;

    const exists = await Admin.findOne({ email });

    if (exists) {
        return res.status(400).json({ message: "Admin already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({ username, email, password: hashedPassword });

    res.status(200).json({
        message: "Admin registered",
        token: generateToken(admin._id)
    });
}


export const loginAdmin = async (req, res) => {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if(!admin){
        return res.status(401).json({ message : "Invalid Credentials "});
    }

    const isMatching = bcrypt.compare(password, admin.password);

    if(!isMatching){
        return res.status(401).json({ message : "Invalid Credentials "});
    };

    res.status(200).json({
        message : "Login Successful",
        token : generateToken(admin._id)
    })
}