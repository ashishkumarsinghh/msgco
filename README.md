# msgco

A customizable and extensible messaging system.

# Application flow

1. User sends REGISTER msg to a public number with the ID(xx) of a specific Service.
2. Server receives the msg and registers the number for the service with ID xx.
3. Service sends request to msgco with content c
4. msgco sends user msgs with content c
5. user may reply with reply(r), msgco sends request to service,(api server defined by service) hiding the number.
6. service might handle the reply or respond NA and send to msgco. msgco then replies the same to user.

# Service Creator(SC)

1. Register a service with the msgco.
2. Notify the creator for approval of service.
3. View stats of service
4. Modify the details of service
5. Delete the service.

# Service responsibilities

- Send requests/response to msgco
- specify the api server of service
- specify the name, description, image?, url? for the service.
