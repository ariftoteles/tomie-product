import { NextFunction, Request, Response } from "express"
import BadRequestError from "../utils/errors/bad-request.error"
import NotFoundError from "../utils/errors/not-found.error"
import { StatusCodes } from "../utils/constants/status-code"

export const errorHandler = async (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof BadRequestError) {
        res.status(err.statusCode).send({ msg: err.message })
    } else if (err instanceof NotFoundError) {
        res.status(err.statusCode).send({ msg: err.message })
    } else {
        res.status(StatusCodes.InternalServerError500).send(err)
    }

    return
}
