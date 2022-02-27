export class CustomError extends Error {
    constructor(
        public statusCode: number = 500,
        public message: string,
        public sqlMessage?: string | undefined) {
        super(message);
        this.statusCode = statusCode;
        this.sqlMessage = sqlMessage;
    }
}