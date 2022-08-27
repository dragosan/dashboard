import express from "express"
import { getTopics } from "../controllers/topicController.js"

const router = express.Router()

router.route("/").get(getTopics)

export default router
