# Introduction
Contact Tracing Protype as assignment for "Secure Software Engineering"-class.\
Implemented security features:
- User authentication through login restriction
- Asymmetric Encryption of payload content between client and server
- Encryption using a secret for data storage on the server
- Input sanitization on client side
- Fail safe page and state for access of non existing urls

# Setup Instructions

## Requirements
Node version >= 16.15.0

## Start
`git clone https://github.com/AndiDreeke/contact-tracing.git` \
`cd contact-tracing` \
`npm install` \
`npm start` 

Start the mock user database in new command line: \
`npx json-server --watch userDatabase.json --port 8081` 

Start the mock express server in new command line: \
`cd backend_server`\
`npm install`\
`node app`

# Usage Instructions

## Credentials to access
Username: "test-user"\
Password: "secretpassword"

## Locations to trigger covid alert by a match with the server
1.\
Location: "University of Adelaide"\
Date: "30.11.2023"\
Between "15:00" and "18:15"

2.\
Location: "Rundle Mall"\
Date: "28.11.2023"\
Between "14:00" and "15:00"