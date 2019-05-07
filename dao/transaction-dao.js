const {Customer, Transaction, TransactionType, AccountCredit, AccountDebit} = require('../db/sequelize');

function getList(callback, filter){
    Transaction.findAll({
        include: [ {
            model: TransactionType
        }, {
            model: AccountDebit,
            as: 'accountDebit',
        }, {
            model: AccountCredit,
            as: 'accountCredit'
        }, {
            model: Customer
        }],
        where : filter
    }).then(
        (transaction)=>{
            callback(null, transaction);
        }
    )
}

module.exports = {getList};