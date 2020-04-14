# msgco

A customizable and extensible messaging system.

# Use Case

Suppose you have a critical task running on your server, and you want to be notified when it completes or there is an error. You just have to make a POST request with the below specified payload and a message will be sent to the numbers you specify as parameter and text you specify as parameter with the POST request.

You don't need to signup on any messaging service, don't have to setup anything, just a simple POST request.

# Application flow

1. Register for the API. (not implemented)
2. Send POST request with numbers Array, and message body.
3. msgco service sends SMS to all the numbers provided.

# API Endpoint

http://localhost:3000/critical/api

# Expected Payload for POST request at endpoint

{to : "number, number", body: "message body"}

# How to Run it ?

1. git clone git@github.com:ashishkumarsinghh/msgco.git
2. cd msgco
3. yarn or npm install
4. yarn start or npm start

# Limitations

- Currently because of Twilio Trial account the messages can be sent only to my number as it is verified.
- If you want to send msgs, you have to set the following parameters in Zeit production environment.
  - TWILIO_SID (you can get it from Twilio Console)
  - TWILIO_TOKEN(you can get it from Twilio Console)
  - TWILIO_NUM(you can get it from Twilio Console)
  - MYNUM(This is your verified number with Twilio)
