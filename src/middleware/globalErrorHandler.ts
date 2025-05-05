import { NextFunction, Request, Response } from 'express'
import { TheHTTPError } from '../types/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: TheHTTPError, _: Request, res: Response, __: NextFunction) => {
    res.status(err.statusCode).json(err)
}   