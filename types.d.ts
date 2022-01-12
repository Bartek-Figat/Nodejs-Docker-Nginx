import { Request } from "express"

declare global {
    namespace Express {
        export interface Request {
            user: {
                generateAccessToken: any
            };
        }
    }
}