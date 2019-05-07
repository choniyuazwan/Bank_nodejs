const Sequelize = require('sequelize');
const CustomerModel = require('./model/customer-sequelize');
const AccountModel = require('./model/account-sequelize');

const AccountDebitModel = require('./model/account-debit-sequelize');
const AccountCreditModel = require('./model/account-credit-sequelize');

const WalletModel = require('./model/wallet-sequelize');
const TransactionTypeModel = require('./model/transaction-type-sequelize');
const TransactionModel = require('./model/transaction-sequelize');
const WalletAccountModel = require('./model/wallet-account-sequelize');

const sequelize = new Sequelize('banking_springboot', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Customer = CustomerModel(sequelize, Sequelize);
const Account = AccountModel(sequelize, Sequelize);

const AccountDebit = AccountDebitModel(sequelize, Sequelize);
const AccountCredit = AccountCreditModel(sequelize, Sequelize);

const Wallet = WalletModel(sequelize, Sequelize);
const TransactionType = TransactionTypeModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize, Sequelize);
const WalletAccount = WalletAccountModel(sequelize, Sequelize);

Account.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(Account, {foreignKey: 'cif'});

Wallet.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(Wallet, {foreignKey: 'cif'});

WalletAccount.belongsTo(Wallet, {foreignKey: 'wallet_id'});
Wallet.hasMany(WalletAccount, {foreignKey: 'wallet_id'});

WalletAccount.belongsTo(Account, {foreignKey: 'account_number'});
Account.hasMany(WalletAccount, {foreignKey: 'account_number'});

WalletAccount.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(WalletAccount, {foreignKey: 'cif'});

Transaction.belongsTo(TransactionType, {foreignKey: 'type'});
TransactionType.hasMany(Transaction, {foreignKey: 'type'});

Transaction.belongsTo(AccountDebit, {foreignKey: 'account_debit'});
AccountDebit.hasMany(Transaction, {foreignKey: 'account_debit'});

Transaction.belongsTo(AccountCredit, {foreignKey: 'account_credit'});
AccountCredit.hasMany(Transaction, {foreignKey: 'account_credit'});

Transaction.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(Transaction, {foreignKey: 'cif'});


module.exports = {
  Customer,
  Account,
  AccountDebit,
  AccountCredit,
  Wallet,
  WalletAccount,
  Transaction,
  TransactionType
};
