// BankAccount class definition
class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    // Method to deposit money into the account
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`$${amount} deposited. New balance: $${this.balance}`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  
    // Method to withdraw money from the account
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`$${amount} withdrawn. New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Invalid withdrawal amount.");
      }
    }
  
    // Method to get the current balance
    getBalance() {
      return this.balance;
    }
  
    // Method to display account information
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  // Creating two instances of BankAccount class
  const account1 = new BankAccount(1001, "John Doe", 500);
  const account2 = new BankAccount(1002, "Jane Smith", 1000);
  
  // Demonstrating functionality
  
  // Display account info
  console.log("Account 1 Information:");
  account1.displayAccountInfo();
  console.log("\nAccount 2 Information:");
  account2.displayAccountInfo();
  
  // Deposit money
  console.log("\nDepositing money into Account 1:");
  account1.deposit(200); // Deposit $200
  
  // Withdraw money
  console.log("\nWithdrawing money from Account 2:");
  account2.withdraw(300); // Withdraw $300
  
  // Attempting to withdraw more than the available balance
  console.log("\nTrying to withdraw more than available balance in Account 1:");
  account1.withdraw(800); // Attempt to withdraw $800
  
  // Display final account info
  console.log("\nFinal Account 1 Information:");
  account1.displayAccountInfo();
  console.log("\nFinal Account 2 Information:");
  account2.displayAccountInfo();
  