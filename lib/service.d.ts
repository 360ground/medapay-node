import { AxiosError, AxiosPromise } from "axios";
import Creds from "./creds";
export default class Service {
    protected creds: Creds;
    protected endpoint: string;
    constructor(creds: Creds, isSandbox?: boolean);
    protected post(path: string, data: any): AxiosPromise<any>;
    protected get(path: string): AxiosPromise<any>;
    protected processErrorResponse(error: AxiosError): {
        status: number | undefined;
        statusText: string | undefined;
        message: string;
        error: any;
    };
}
