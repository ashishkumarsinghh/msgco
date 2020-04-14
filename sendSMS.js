//const dotenv = require("dotenv").config();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

function sendSMS(to, body) {
  client.messages
    .create({
      body: body,
      from: process.env.TWILIO_NUM,
      to: to.trim(),
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.log(error));
}

function sendSMSes(to, body) {
  to.forEach((element) => {
    sendSMS(element, body);
  });
}

module.exports = sendSMSes;
