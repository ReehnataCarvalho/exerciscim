//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.currentBalance = 0;
    this.statusAccount = 'closed';
  }

  open() {
    if (this.statusAccount === 'open') {
      throw new ValueError();
    }

    this.currentBalance = 0;
    return this.statusAccount = 'open' 
  }

  close() {
    if (this.statusAccount === 'closed') {
      throw new ValueError();
    }

    this.currentBalance = 0;
    return this.statusAccount = 'closed' 
  }

  deposit(moneyDeposit) {
    if (this.statusAccount === 'closed' || moneyDeposit < 0) {
      throw new ValueError();
    }

    this.currentBalance += moneyDeposit;
  }

  withdraw(removeMoney) {
    if (this.statusAccount === 'closed' || this.currentBalance == 0 || removeMoney > this.currentBalance || removeMoney <= 0 ) {
      throw new ValueError();
    }

    this.currentBalance -= removeMoney;
  }

  get balance() {
    if (this.statusAccount === 'closed' ) {
      throw new ValueError();
    }

    return this.currentBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}