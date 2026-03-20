import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res) => {

    let token ;

    if(req.headers.authorization?.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];

        try {
            
            const decoded = jwt.verify(token , process.env.JWT_SECRET)
            req.adminId = decoded._id;
            next();
        } catch (error) {
            return res.status(201).json({ message : "Not Authorized"});
        }
    }

    if(!token){
        return res.status(401).json({ message : "No token"});
    }
}