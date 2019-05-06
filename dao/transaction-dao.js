const {Customer, Transaction} = require('../db/sequelize');

function getList(callback){
    Transaction.findAll({
        include: [{
            model: Customer,
            as: 'customer',
        }]
    }).then(
        (transaction)=>{
            callback(null, transaction);
        }
    )
}

function getListByCif(id, callback){
    Transaction.findAll({
        where: {
            cif: id
        },
        include: [{
            model: Customer,
            as: 'customer',
        }]
    }).then(
        (transaction)=>{
            callback(null, transaction);
        }
    )
}

module.exports = {getList, getListByCif};