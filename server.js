import express from "express"
import "express-async-errors"
import connectDB from "./db/connect.js"
import morgan from "morgan"
import errorHandlerMiddleware from "./middleware/error-handler.js"
import cookieParser from "cookie-parser"
const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false}))


//  auth
import authRouter from "./routes/authRoutes.js"
import User from "./models/User.js"



app.use(express.json())
app.use(cookieParser())


if(process.env.NODE_ENV !== "production"){
    app.use(morgan("dev"))
}

app.get('/', (req, res) => {
    res.json({ msg: "Welcome"})
})

app.get('/api/v1', (req, res) => {
    res.json({ msg: "API"})
})




const port = process.env.PORT || 8000

app.use("/api/v1/auth", authRouter)

app.use(errorHandlerMiddleware)



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            (`Server is runing on ${port}...`);
        })
    } catch (error) {
        (error);
    }
}


// app.post("/forgot-password", async (req, res) => {
//     const { email } = req.body
//     try {
     
//    const userAlreadyExists = await User.findOne({email})
//         if(!userAlreadyExists) {
//             return res.json("User does not exist")
//     }
//    const secret = JWT_SECRET + userAlreadyExists.password
//    const token = jwt.sign({ email: userAlreadyExists.email, id: userAlreadyExists._id }, secret, {
//     expiresIn : "5m", 
//    })
//         const link = `http://localhost:8000/reset-password/${userAlreadyExists._id}/${token}`
//        (link);
//     } catch (error) {
        
//     }
    
// })

// app.get("/reset-password", async(req,res) => {
//     const { id, token } = req.params
// })

start()