import jwt from 'jsonwebtoken'
const jwtSecret = "HaHa"

const verification = (req, res, next) => {
    const token = req.body.authToken;
    // console.log(token);
    if (!token) {
        res.json({ msg: "invalid token", status: false });
    }
    try {
        const data = jwt.verify(token, jwtSecret);
        if (data) {
            // console.log(data);

            if(data.user){
                // console.log("user");
                req.user = data.user;
            }
            if(data.doctor){
                req.user = data.doctor;
                // console.log("doc");
            }
            next();
        }
    } catch (error) {
        res.json({ msg: "invalid token", status: false });
    }
}
export default verification;

// var jwt = require('jsonwebtoken');
// const JWT_SECRET = 'Harryisagoodb$oy';

// const fetchuser = (req, res, next) => {
//     // Get the user from the jwt token and add id to req object
//     const token = req.header('auth-token');
//     if (!token) {
//         res.status(401).send({ error: "Please authenticate using a valid token" })
//     }
//     try {
//         const data = jwt.verify(token, JWT_SECRET);
//         req.user = data.user;
//         next();
//     } catch (error) {
//         res.status(401).send({ error: "Please authenticate using a valid token" })
//     }

// }