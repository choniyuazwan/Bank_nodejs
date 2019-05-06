const Sequelize = require('sequelize');
const CustomerModel = require('./model/customer-sequelize');
const AccountModel = require('./model/account-sequelize');
const WalletModel = require('./model/wallet-sequelize');
const CategoryModel = require('./model/category-sequelize');
const BankModel = require('./model/bank-sequelize');
const TransactionModel = require('./model/transaction-sequelize');
const WalletAccountModel = require('./model/wallet-account-sequelize');

const sequelize = new Sequelize('banking_springboot', 'root', '12345', {
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
const Wallet = WalletModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Bank = BankModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize, Sequelize);
const WalletAccount = WalletAccountModel(sequelize, Sequelize);

Account.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(Account, {foreignKey: 'cif'});

Wallet.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(Wallet, {foreignKey: 'cif'});

Transaction.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(Transaction, {foreignKey: 'cif'});

WalletAccount.belongsTo(Wallet, {foreignKey: 'wallet_id'});
Wallet.hasMany(WalletAccount, {foreignKey: 'wallet_id'});
WalletAccount.belongsTo(Account, {foreignKey: 'account_number'});
Account.hasMany(WalletAccount, {foreignKey: 'account_number'});
WalletAccount.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(WalletAccount, {foreignKey: 'cif'});

module.exports = {
  Customer,
  Account,
  Wallet,
  Category,
  Bank,
  Transaction,
  WalletAccount
};
