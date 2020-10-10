import Creds from "./creds";
import MedaPay from "./medapay";

export * from "./models";
export * from "./medapay";

export const init = (creds: Creds, isSandbox?: boolean) => {
    return new MedaPay(creds, isSandbox);
};
