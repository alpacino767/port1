import express from 'express'
const router = express.Router()


import { register, login ,logout, forgotpassword, resetpassword , updatePassword} from "../controllers/authController.js";


router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/forgotpassword").post(forgotpassword)
router.route("/resetpassword/:id/:token").get(resetpassword)
router.route("/updatepassword").post(updatePassword)


export default router 
