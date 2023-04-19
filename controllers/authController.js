import User from "../models/User.js"
import { StatusCodes } from "http-status-codes"
import { UnAuthenticatedError} from "../errors/index.js"
import attachCookies from "../utils/attachCookies.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"





class CustomAPIError extends Error {
    constructor(message) {
        super(message)
       
    }
} 
class BadRequestError extends Error {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
} 
class NotFoundError extends Error {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
} 



const register =  async (req, res) => {

    
    const { name, email, password } = req.body

    if (!name || !password || !email) {
        throw new BadRequestError ("Please provide all values")
    }

     const userAlreadyExists = await User.findOne({email})
     if (userAlreadyExists){
        throw new BadRequestError('Email is already in use')
     }
   const user = await User.create({ name, email, password })
   const token = user.createJWT()
   attachCookies({ res, token})
 
    res.status(StatusCodes.CREATED).json({ user: {
        email: user.email,
        name: user.name,
    }, 
    token },)
    
}

const login = async (req, res) => {
  const { email, password } = req.body

  if(!email || !password) {
    throw new BadRequestError("Please provide all values")
  }
  const user = await User.findOne({ email }).select("+password")
  if(!user){
    throw new UnAuthenticatedError("Invalid credentials")
  }
 
  const isPasswordCorrect = await user.comparePassword(password)
  if(!isPasswordCorrect){
    throw new  UnAuthenticatedError("Invalid credentials")
  }
  const token = user.createJWT()

  user.password = undefined
  attachCookies({ res, token})


const oneDay = 1000 * 60 * 60 * 24
res.cookie("token", token, {
  httpOnly:true,
  expires: new Date(Date.now() + oneDay),
  secure: process.env.NODE_ENV === "production"

})
  res.status(StatusCodes.OK).json({user, token})

}


 
const logout = async (req, res) => {
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({msg: "user logged out!"})

}

const forgotpassword = async (req, res) => {
  const { email } = req.body
  // ("see the request", req.body);
      const userAlreadyExists = await User.findOne({ email })
      if(!userAlreadyExists) {
          return res.status(400).json("User does not exist")
  }
 const secret = process.env.JWT_SECRET + userAlreadyExists.password
 const token = jwt.sign({ email: userAlreadyExists.email, id: userAlreadyExists._id }, secret, {
  expiresIn : "15m", 
 })


//  ("see string token", token);
      // const link = `http://localhost:8000/api/v1/auth/resetpassword/${userAlreadyExists._id}/${token}`
      const link = `http://localhost:3000/reset-password/${userAlreadyExists._id}/${token}`

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ogutony44@gmail.com',
    pass: "pzdppdfaicqeorei"
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'ogutony28@gmail.com',
  subject: 'Password reset',
  text: link
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    (error);
  } else {
    res.status(200).json("Email sent")
    ('Email sent: ' + info.response);
  }
});
      // ("see link", link);

}




const resetpassword = async (req, res) => {
    const { id, token } = await req.params;
    // ("see the reqq", req.params);
    const userAlreadyExists = await User.findOne({ _id: id })
    if(!userAlreadyExists) {
        return res.json("User does not exist")
}
const secret = process.env.JWT_SECRET + userAlreadyExists.password
try {
  const verify = jwt.verify(token, secret)
  res.render("index", { email: verify.email , status:"Not verified"})
} catch (error) {
  res.send("Not Verified")
}
    // res.send("Done")
  

}
const updatePassword = async (req, res) => {
  // const { id, token } = await req.params;
  const { id, token, newPassword } =  req.body
  
  const userAlreadyExists = await User.findOne({ _id: id })
  if(!userAlreadyExists) {
      return res.json("User does not exist")
}
const secret = process.env.JWT_SECRET + userAlreadyExists.password
try {
const verify = jwt.verify(token, secret)
const encryptedPassword = await bcrypt.hash(newPassword, 10)
await User.updateOne(
  {
    _id: id,
  },
  {
    $set: {
      password: encryptedPassword,
    }
  }
)

res.json({ status: "Password Updated" })
// res.render("index", { email: verify.email , status: "verified"})
} catch (error) {
// (error);
res.json({ status :"Something went wrong"})
}

}



export { register, login, logout, forgotpassword, resetpassword, updatePassword } 