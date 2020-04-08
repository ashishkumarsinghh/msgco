const dotenv = require("dotenv").config();
const connectToDB = require("./dbConnect");
const sendSMS = require("./sendSMS");
connectToDB();
sendSMS(process.env.MYNUM, "Final test msg.");
