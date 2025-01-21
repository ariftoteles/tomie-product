import express from "express"
import { logMiddleware, errorLoggerMiddleware } from "./middlewares/logger.middleware"
import { errorHandler } from "./middlewares/error-handler.middleware"
import routes from "./routes"
import { PORT } from "./config/config"

const app = express()

app.use(express.json())
app.use(logMiddleware)

app.use("/", routes)

app.use(errorLoggerMiddleware)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT || 3000}`)
})
