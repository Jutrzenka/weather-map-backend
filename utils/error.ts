type Code = 200;

export class ErrorResponse {
    flag: boolean;
    code: Code;
    message: string;
    constructor(flag: boolean, message:string, code:Code) {
        this.flag = flag;
        this.code = code;
        this.message = message;
    }
}