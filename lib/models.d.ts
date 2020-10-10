interface PaymentDetails {
    orderId: string;
    description: string;
    amount: number;
    customerName: string;
    customerPhoneNumber: string;
}
interface RedirectUrls {
    returnUrl: string;
    cancelUrl: string;
    callbackUrl?: string;
}
/**
 * {
    "purchaseDetails": {
        "orderId": "XXXXXXXXXXXXX",
        "description": "XXXXX XXXXX XXXXXXX",
        "amount": XX,
        "customerName": "XXXX XXXXX",
        "customerPhoneNumber" : "+2519xxxxxxxx"
    },
    "redirectUrls": {
        "returnUrl": "https://example.et/return",
        "cancelUrl": "https://example.et/cancel",
        "callbackUrl": "https://example.et/callback"
    }
}
 */
export interface CreateBill {
    paymentDetails: PaymentDetails;
    redirectUrls: RedirectUrls;
}
interface CreateBillResponseLink {
    href: string;
    rel: string;
    method: string;
}
/**
 * {
  "billReferenceNumber": "XXXXXXXXXX",
  "link": {
    "href": "https://api.sandbox.pay.meda.chat/pay/bills/XXXXXXXXXX",
    "rel": "self",
    "method": "GET"
  },
  "status": "created"
}
 */
export interface CreateBillResponse {
    billReferenceNumber: string;
    link: CreateBillResponseLink;
    status: string;
}
/**
 * {
  "referenceNumber": "XXXXXXXXXX",
  "accountNumber": "+2519xxxxxxxx",
  "customerName": "XXXX XXXXX",
  "description": "XXXXX XXXXX XXXXXXX",
  "amount": XX,
  "paymentType": "general-payment",
  "paymentMethod": "amole",
  "status": "CANCELED",
  "createdAt": "2020-09-16T12:46:27.654Z",
  "orderId": "XXXXXXXXXXXXX"
}
 */
export interface Bill {
    referenceNumber: string;
    accountNumber: string;
    customerName: string;
    description: string;
    amount: number;
    paymentType: string;
    paymentMethod: string;
    status: string;
    createdAt: string;
    orderId: string;
}
export {};
