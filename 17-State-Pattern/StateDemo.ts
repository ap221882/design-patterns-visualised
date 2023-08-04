type Nullable<T> = T | null;

interface State {
  connect: () => void;
  close: () => void;
  sendMessage: (message: Nullable<string>) => void;
}

class CloseState implements State {
  connect() {
    console.log("Reopened the connection");
  }
  close() {
    console.log("Connection is already closed");
  }
  sendMessage(message: string) {
    console.log("Connection is not open");
  }
}

class ErrorState implements State {
  connect() {
    console.log("Connection in error state");
  }

  close() {
    console.log("Connection is closed");
  }

  sendMessage(message: string) {
    console.log("Connection is in error message");
    return this;
  }
}

class OpenState implements State {
  connect() {
    console.log("Connection is already open");
    return this;
  }

  close() {
    return new CloseState();
  }

  sendMessage(message: Nullable<string>) {
    if (message === null) {
      return new ErrorState().sendMessage(message);
    }
    console.log(`Sending Message: ${message}`);
    return this;
  }
}

class ConnectionNew {
  state: State;
  constructor() {
    this.state = new OpenState();
  }
  sendMessage(message: string) {
    new OpenState().sendMessage(message);
  }
  connect() {
    new OpenState().connect();
  }
  close() {
    new CloseState();
  }
}
// class Connection {
//   state: State;
//   public constructor() {
//     this.state = State.open;
//   }

//   public connect() {
//     if (this.state == State.open) {
//       console.log("Connection already open");
//     } else if (this.state == State.error) {
//       console.log("Connection is error state");
//     }

//     this.state = State.open;
//   }

//   public sendMessage(message: string) {
//     if (null == message) this.state = State.error;

//     if (this.state == State.error) console.log("Connection is in error state");
//     else if (this.state == State.open)
//       console.log(`Sending message ${message}`);
//     else console.log("Connection is not open");
//   }

//   public close() {
//     if (this.state == State.closed) console.log("Connection is not open");
//   }
// }

let connection = new ConnectionNew();
connection.sendMessage("Hello");
connection.connect();
connection.sendMessage("Hello");
connection.connect();
connection.sendMessage(null);
connection.close();
