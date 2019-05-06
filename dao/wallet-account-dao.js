const {Customer, Account, Wallet, WalletAccount} = require('../db/sequelize');
function getList(callback, filter){
    console.log(`filter : ${JSON.stringify(filter)}`);
    WalletAccount.findAll({
        include: [{
            model: Wallet,
            // as: 'wallets',
        },
        {
            model: Account,
            // as: 'accounts',
        },
        {
            model: Customer,
            // as: 'customer',
        }
        ],
        where: filter 
    }).then(
        (customers)=>{
            callback(null, customers);
        }
    )
}

function getById(id, callback){
    WalletAccount.findByPk(id, {
        include: [{
            model: Wallet,
            // as: 'wallets',
        },
        {
            model: Account,
            // as: 'accounts',
        },
        {
            model: Customer,
            // as: 'customer',
        }
        ]
    }).then(
        (walletaccount) => {
            callback(null, walletaccount);
        }
    )
}

function insert(data, callback){
    WalletAccount.create({
        id: data.id,
        walletId: data.walletId,
        accountNumber: data.accountNumber,
        cif: data.cif,
    }).then(
        (walletaccount) => {
            callback(null, walletaccount)
        }
    )
}

function update(id, data, callback){
    Customer.update({
        name: data.name,
        address: data.address
    }, {
        where: {cif: id}
    }).then(
        (customer) => {
            callback(null, customer)
        }
    )
}

function remove(id, callback){
    Customer.destroy({
        where: {cif: id}
    }).then(
        (customer) => {
            callback(null, customer);
        }
    )
}

module.exports = {getList, getById, insert, update, remove};
