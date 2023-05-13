import express from 'express'
const router = express.Router()
import {authUser,getUserProfile} from '../controllers/userContoller.js'


router.post("/login",authUser)
router.route("/profile").get(getUserProfile)

export default router