const WhatsApp = require("./WhatsApp.js");

class Email {
  recipient;

  constructor(recipient) {
    this.recipient = recipient;
  }

  sendMessage(Message) {
    console.log(`Email sent to ${this.recipient}`);
  }
}

class SMS {
  recipient;

  constructor(recipient) {
    this.recipient = recipient;
  }

  sendMessage(Message) {
    console.log(`SMS sent to ${this.recipient}`);
  }
}

class Subscriber {
  firstName;
  lastName;

  notifier = [];

  Subscriber(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  addNotifier(comm) {
    this.notifier.push(comm);
  }

  notifySubscriber(message) {
    this.notifier.forEach((comm) => comm.sendMessage(message));
  }
}

class WhatsAppAdapter {
  constructor(object){
    this.object = object;
  }

  sendMessage(Message){
    console.log('executed');
    
    this.object.submitMessage(Message)
  }
}

var list = [];
var bill = new Subscriber("Bill", "Gates");
bill.addNotifier(new Email("billg@microsoft.com"));
list.push(bill);

var elon = new Subscriber("Elon", "Musk");
elon.addNotifier(new SMS("1-CALL-ELONMUSK"));
list.push(elon);

var zuck = new Subscriber("Mark", "Zuckerberg")
console.log('zuck', zuck);
zuck.addNotifier(new WhatsAppAdapter(new WhatsApp("Hey")))
list.push(zuck)

list.forEach((person) => {
  person.notifySubscriber("Bill due in 3 days");
});
