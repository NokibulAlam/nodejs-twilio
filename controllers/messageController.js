const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

// send message
exports.sendMessage = (req, res, next) => {
    // console.log(req.body);
    let to = req.body.From;
    let from = req.body.To;
    let message = req.body.Body;

    if(message === "Hello") {
        client.messages.create({
            from: from,
            body: "Hello From Twilio",
            to: to,
        })
            .then((message) => {
                console.log(message.sid);
            })
            .catch((err) => {
                console.log("Error at messahe" +err);
            })
    }
}