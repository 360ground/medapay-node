import Creds from "./creds";
import MedaPay from "./medapay";
export * from "./models";
export * from "./medapay";
export declare const init: (creds: Creds, isSandbox?: boolean | undefined) => MedaPay;
