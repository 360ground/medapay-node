# Meda Pay Web Integration Guide for Express Payment
---
###### Document Revision 1.0.1

## Overview

Use MedaPay web to easily and securely accept online payments. This guide shows you how to create bill, view bill details, and process payments.

---

## Integration Steps

| Step | Description                            |
| ---- | -------------------------------------- |
| 1.   | Get Authorization Token from MedaPay.  |
| 2.   | Create Bill.                           |
| 3.   | Add MedaPay Button.                    |
| 4.   | Process payment with MedaPay.          |
| 5.   | Check payment status upon redirection. |

---

## Get Authorization Token from MedaPay

Before you can integrate MedaPay, you ought to get your application registered and obtain an Authorization Token. After you get a token that lets you access protected API resources, you can create bills and get started in the Sandbox enviroment to test your web app.

**Please contact MedaPay team to obtain your Authorization Token.**

---

## Create Bill

To create a Bill in MedaPay:

```
POST https://api.sandbox.pay.meda.chat/v1/bills
```

Please include `Authorization`, `Content-Type` and `Accept` headers.

The request will include the following data:

| Parameter         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `purchaseDetails` | An array with details for the customer and order. It is mandatory to specify these information: <ul><li>`orderId` : Your order id to keep track of the order ( Typically an order will be created in your application with a status of CREATED.)</li><li>`description` : Your order description (This will be visible on MedaPay Express Payment Screen for the customer)</li><li>`amount`: Total purchase amount.</li><li>`customerName` : Customer's Full name.</li><li>`customerPhoneNumber` : Customer's phone number.</li></ul> |
| `redirectUrls`    | Specify the return and cancel URLs:<ul><li>`returnUrl`: The URL on your website to which to redirect a customer when he or she completes a payment.</li><li>`cancelUrl`: The URL on your website to which to redirect a customer when he or she cancels a payment.</li><li>`callbackUrl`: The URL on your website to which to send bill updates (payment completion or cancellation) via a POST request.</li></ul>                                                                                                                                                                                                                                                         |

### Sample Request

Example Create Bill request:

```
POST https://api.sandbox.pay.meda.chat/v1/bills
-H "Authorization: Bearer <Access-Token>"
-H "Accept: application/json"
-H "Content-Type: application/json"
-d '{
    "purchaseDetails": {
        "orderId": "order_12345678900ffx",
        "description": "Paying for a 3 months fee",
        "amount": 950.25,
        "customerName": "Kenenisa Bekele",
        "customerPhoneNumber" : "+251911000000",
    },
    "redirectUrls": {
        "returnUrl": "https://example.et/return",
        "cancelUrl": "https://example.et/cancel"
        "callbackUrl": "https://example.et/callback"
    }
}'
```

### Sample API Response

- The Create Bill call to /v1/bills creates a bill with status `created`. Save the associated `orderId` to pass to subsequent calls.
- A successful Create Bill request returns an HTTP 2<nn> status code. Any other status value indicates an error. In this case, correct the problem and resubmit the bill.

Example response to the preceeding create order request:

```
Headers:
201 Created
Body:
{
    "billReferenceNumber": "10000000",
    "link" : {
        "href": "https://api.sandbox.pay.meda.chat/v1/pay/bills/10000000",
        "rel": "self",
        "method": "GET"
    },
    "status": "created"
}
```

## Add MedaPay Button

Using the `link` (example: `https://api.sandbox.pay.meda.chat/v1/pay/bills/10000000`) from the create bill response, either create a button "Pay with MedaPay" or directly redirect the customer to MedaPay to initiate payment.

## Process payment with MedaPay

After the customer is redirected to MedaPay Web, He or she will be presented with the payment details and available ways to settle the bill. Currently availabe payment options include:

- Amole
- CBE Birr
- Hello Cash
- mBirr

After payment is `processed` / `canceled`, customers will be redirected back to your website to complete their order; Please note `redirectUrls` from create bill section are used here.

## Check payment status upon redirection

Payment status can be checked using the following url:

```
GET https://api.sandboax.pay.meda.chat/v1/bills/1000000
```

Possible bill statuses:

- `created`: for bills that are created
- `pending`: waiting for payment to be processed
- `canceled`: canceled by user or due to insufficient balance
- `complete`: payment successfully processed and bill settled

With that you are integrated with **MedaPay Express Payment**.
