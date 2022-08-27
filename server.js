import path from "path"
import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"

import connectDB from "./config/db.js"
import topic from "./routes/topic.js"

dotenv.config({ path: "./config/config.env" })
const app = express()
app.use(express.json())

connectDB()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.get("/", (req, res) => {
  res.send("api is running")
})

//routes
app.use("/api/topics", topic)

const port = process.env.PORT || 5000

app.listen(port, () =>
  console.log(`Server running on port ${port} in ${process.env.NODE_ENV} mode`)
)
