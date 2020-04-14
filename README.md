# msgco

A customizable and extensible messaging system.

# Application flow

1. Register for the API.
2. Send POST request with numbers Array, and message body.
3. msgco service sends SMS to all the numbers provided.

# API Endpoint

http://localhost:3000/critical/api

# Expected Payload for POST request at endpoint

{to : "number, number", body: "message body"}
