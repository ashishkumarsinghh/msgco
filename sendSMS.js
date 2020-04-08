const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

function sendSMS(to, body) {
  client.messages
    .create({
      body: body,
      from: process.env.TWILIO_NUM,
      to: to,
    })
    .then((message) => console.log(message.sid));
}

module.exports = sendSMS;
