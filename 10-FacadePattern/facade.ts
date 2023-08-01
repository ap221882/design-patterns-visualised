type Nullable<T> = T | null;

class Account {
  public accountNumber: number;
  public holdersName: string;
  public balance: number;

  constructor(accountNumber: number, holdersName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.holdersName = holdersName;
    this.balance = balance;
  }
}

class Bank {
  accounts: Account[] = [];

  constructor(account: Nullable<Account> = null) {
    this.accounts.push(new Account(101, "Mukesh Ambani", 100000000));
    this.accounts.push(new Account(102, "Gautam Adani", 200000000));
    this.accounts.push(new Account(103, "Anil Ambani", 100000));
  }

  public getAccount(name: string): Account | null {
    const searchName = name.trim().toLowerCase();
    const found = this.accounts.find(
      (account) => account.holdersName.trim().toLowerCase() === searchName
    );
    return found ? found : null;
  }
}

class Rating {
  public name: string;
  public rating: number;

  constructor(name: string, rating: number) {
    this.name = name;
    this.rating = rating;
  }
}

class CreditRating {
  ratings: Rating[] = [];

  constructor() {
    this.ratings.push(new Rating("Mukesh Ambani", 900));
    this.ratings.push(new Rating("Gautam Adani", 750));
    this.ratings.push(new Rating("Anil Ambani", 250));
  }

  public eligibleForLoan(name: string): boolean {
    const searchName = name.trim().toLowerCase();
    const person = this.ratings.find(
      (obj) => obj.name.trim().toLowerCase() === searchName
    );
    if (person) return person.rating >= 650;
    return false;
  }
}

class LoanHistory {
  public name: string;
  public loanAmount: number;
  public paid: string;

  constructor(name: string, loanAmount: number, paid: string) {
    this.name = name;
    this.loanAmount = loanAmount;
    this.paid = paid;
  }
}

class CreditHistory {
  public history: LoanHistory[] = [];
  constructor() {
    this.history.push(new LoanHistory("Mukesh Ambani", 100000, "paid"));
    this.history.push(new LoanHistory("Mukesh Ambani", 500000, "ongoing"));
    this.history.push(new LoanHistory("Gautam Ambani", 10000000, "ongoing"));
    this.history.push(new LoanHistory("Gautam Ambani", 15000000, "ongoing"));
    this.history.push(new LoanHistory("Gautam Ambani", 2000000, "paid"));
    this.history.push(new LoanHistory("Anil Ambani", 5000000, "paid"));
    this.history.push(new LoanHistory("Anil Ambani", 10000000, "defaulted"));
  }

  public hasDefaulted(name: string): boolean {
    const searchName = name.trim().toLowerCase();

    const result = this.history.find(
      (history) =>
        history.name.trim().toLowerCase() === searchName &&
        history.paid.trim().toLowerCase() === "defaulted"
    );

    return result == null;
  }
}

const holdersName: string = "Anil Ambani";
const loanAmount: number = 100000;

class LoanSystem {
  holdersName: string;
  loanAmount: number;
  constructor({
    holdersName,
    loanAmount,
  }: {
    holdersName: string;
    loanAmount: number;
  }) {
    this.holdersName = holdersName;
    this.loanAmount = loanAmount;
  }

  approval() {
    const bank = new Bank();
    const rating = new CreditRating();
    const creditHistory = new CreditHistory();

    let approved: boolean = true;

    const approvalLookup = {};
    //~! remove these ifs
    if (!bank.getAccount(this.holdersName)) {
      console.error(
        `Application ${this.holdersName} does not have a bank account`
      );
      approved = false;
    }

    if (!rating.eligibleForLoan(this.holdersName)) {
      console.error(`Application ${this.holdersName} is not eligible for loan`);
      approved = false;
    }

    if (!creditHistory.hasDefaulted(this.holdersName)) {
      console.error(`Application ${this.holdersName} has defaulted before`);
      approved = false;
    }

    if (bank.getAccount(this.holdersName)!.balance < this.loanAmount / 10) {
      console.error(
        `Application ${this.holdersName} does not have sufficient funds`
      );
      approved = false;
    }

    console.log(
      `Loan of amount ${this.loanAmount} of ${this.holdersName} has${
        approved ? " " : " not "
      }been approved`
    );
  }
}

new LoanSystem({ holdersName: "Anil Ambani", loanAmount: 100000 }).approval();
new LoanSystem({ holdersName: "Mukesh Ambani", loanAmount: 100000 }).approval();
