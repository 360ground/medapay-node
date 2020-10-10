import Creds from "./creds";
import Service from "./service";
import { CreateBill, CreateBillResponse, Bill } from "./models";
declare class MedaPay extends Service {
    constructor(creds: Creds, isSandbox?: boolean);
    create(bill: CreateBill): Promise<CreateBillResponse>;
    bill(referenceNumber: string): Promise<Bill>;
}
export default MedaPay;
