var nodemailer = require('nodemailer');
const http = require('http');
const url = require('url');
var moment = require('moment');

//////
// needs configured
// tested with service: 'gmail'
// user is gmail email address
// pass is gmail password that has been created
//////
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUREMAILADDRESS@gmail.com',
    pass: 'YOURAPPPASSWORD'
  }
});

////
// needs configured
// from is your email address
// to is the email address you want to send the alert
// subject and text can be changed.
////
var mailOptions = {
  from: 'YOUREMAILADDRESS@gmail.com',
  to: 'TARGETEMAILADDRESS@gmail.com',
  subject: 'Mail\'s Here!',
  text: 'The mail has been delivered to your mailbox!!!'
};

// minutes to wait after getting notified of mail delivery
// before listeneing for another notification
// helps prevent sending 2 emails, one for opening the mail door
// and one for closign it
const minutesToWaitForDoorClosed = 15;

class GarageDoorState {
  constructor(state, openTime, emailed) {
    this.state = state;
    this.openTime = openTime;
    this.emailed = emailed;
  }
  
}

const hostname = '0.0.0.0';
const port = 3000;

var lastReceivedTime = moment().subtract(1, 'days').calendar();;

const server = http.createServer((req, res) => {

  var urlParts = url.parse(req.url, true);

  console.log(urlParts.query);

  if(urlParts.pathname === '/mailsHere') {

    console.log('mail notification received');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('mail notification received');
    
    if (lastReceivedTime.diff(moment(), 'minutes') > minutesToWaitForDoorClosed) {
      lastReceivedTime = moement()
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
    
  }

  else { 

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hmmmm');

  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
