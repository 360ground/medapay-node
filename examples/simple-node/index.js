// Load environment variable from .env file
require('dotenv').config();

// Initialize MedaPay with token and sandbox flag
// Ideally the settings are loaded from an environment variable
const MedaPay = require("medapay").init({
    bearerToken: process.env.MEDAPAY_BEARER_TOKEN
}, process.env.MEDAPAY_IS_SANDBOX === 'yes');

const SAMPLE_BILL = {
    "purchaseDetails": {
        "orderId": "order_12345678900ffx",
        "description": "Sample good at store x",
        "amount": 12.50,
        "customerName": "Ayele Mekite",
        "customerPhoneNumber" : "+251911000000"
    },
    "redirectUrls": {
        "returnUrl": "https://example.et/return",
        "cancelUrl": "https://example.et/cancel",
        "callbackUrl": "https://example.et/callback"
    }
};

const sleep = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timeout);
    });
}

(async () => {
    console.info('---< Start >---');
    console.info('---< Environment >---');
    console.info(`---< Sandbox:  ${process.env.MEDAPAY_IS_SANDBOX}>---`);

    try {
        console.info('---< Creating Bill >---');
        const createBillResponse = await MedaPay.create(SAMPLE_BILL);
        console.info('---< CreateBillResponse: >---');
        console.info(createBillResponse);
        console.info('---< CreateBillResponse: >---');

        console.info(`---< Simulating redirection to: ${createBillResponse.link.href}>---`);

        await sleep(5000);

        console.info(`---< Simulation complete to: ${createBillResponse.link.href}>---`);

        console.info('---< Checking Bill Status >---');
        const bill = await MedaPay.bill(createBillResponse.billReferenceNumber);
        console.info('---< Bill: >---');
        console.debug(bill);
        console.info('---< Bill: >---');
    } catch(error) {
        console.debug('---< An Exception Occurred >---')
        console.error(error);
    } finally {
        console.info('---< Finished >---')
    }

})();
