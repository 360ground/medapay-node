import Axios, {AxiosError, AxiosPromise} from "axios";

import Creds from "./creds";

export default class Service {
    protected creds: Creds;
    protected endpoint: string;

    constructor(creds: Creds, isSandbox?: boolean) {
        this.creds = creds;
        this.endpoint = "";
    }

    protected post(path: string, data: any): AxiosPromise<any> {
        return Axios({
            method: "post",
            url: `${this.endpoint}/${path}`,
            data: data,
            headers: {
                authorization: `Bearer ${this.creds.bearerToken}`,
            },
        });
    }

    protected get(path: string): AxiosPromise<any> {
        return Axios({
            method: "get",
            url: `${this.endpoint}/${path}`,
            headers: {
                authorization: `Bearer ${this.creds.bearerToken}`,
            },
        });
    }

    protected processErrorResponse(error:AxiosError) {
        return {
            status: error.response?.status,
            statusText: error.response?.statusText,
            message: error.message,
            error: error.response?.data
        }
    }
}
