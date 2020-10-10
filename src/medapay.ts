import Creds from "./creds";

import Service from "./service";
import { endpoints } from "./constants";
import { AxiosResponse, AxiosError } from "axios";
import { CreateBill, CreateBillResponse, Bill } from "./models";

class MedaPay extends Service {
    constructor(creds: Creds, isSandbox?: boolean) {
        super(creds);
        this.endpoint = isSandbox ? endpoints.sandbox : endpoints.production;
    }

    public create(bill: CreateBill): Promise<CreateBillResponse> {
        return this.post("bills", bill)
            .then((response: AxiosResponse<CreateBillResponse>) => {
                const { data } = response;
                return data;
            })
            .catch((error: AxiosError) => {
                throw this.processErrorResponse(error);
            });
    }

    public bill(referenceNumber: string): Promise<Bill> {
        return this.get(`bills/${referenceNumber}`)
            .then((response: AxiosResponse<Bill>) => {
                const { data } = response;
                return data;
            })
            .catch((error: AxiosError) => {
                throw this.processErrorResponse(error);
            });
    }
}

export default MedaPay;
