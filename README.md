## Introduction
Contact Tracing Protype as assignment for "Secure Software Engineering"-class.\
Implemented security features:
- User authentication through login restriction
- Asymmetric Encryption of payload content between client and server
- Encryption using a secret for data storage on the server
- Input sanitization on client side
- Fail safe page for access of non existing urls

## Setup Instructions

### Requirements
Node version >= 16.15.0

### Start
`git clone https://github.com/AndiDreeke/contact-tracing.git` \
`cd contact-tracing` \
`npm install` \
`npm start` 

Start the mock user database in new command line: \
(optional) `npm i json-server` might not be neccessary
`json-server --watch userDatabase.json --port 8081` \

Start the mock express server in new command line: \
`cd backend_server`\
`npm install`\
`node app`

### Credentials to access
Username: "test-user"\
Password: "secretpassword"