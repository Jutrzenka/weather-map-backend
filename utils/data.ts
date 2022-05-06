import {ErrorResponse} from "./error";

type errorRes = false | ErrorResponse;

class Response {
    errorResponse: errorRes;
    data: any;
    constructor(error:errorRes, data:any) {
        this.errorResponse = error;
        this.data = data
    }
}