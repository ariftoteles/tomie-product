import { StatusCodes } from "../constants/status-code"

class NotFoundError extends Error {
    readonly statusCode: number
    constructor(message: string) {
        super(message)
        this.statusCode = StatusCodes.NotFound404
    }
}

export default NotFoundError
