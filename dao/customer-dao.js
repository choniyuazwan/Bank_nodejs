const {Customer, Account} = require('../db/sequelize');
function getList(callback, filter){
    console.log(`filter : ${JSON.stringify(filter)}`);
    Customer.findAll({
        include: [{
            model: Account,
            as: 'accounts',
        }],
        where: filter 
    }).then(
        (customers)=>{
            callback(null, customers);
        }
    )
}

function getById(id, callback){
    Customer.findByPk(id, {
        include: [{
            model: Account,
            as: 'accounts',
        }]
    }).then(
        (customer) => {
            callback(null, customer);
        }
    )
}

function insert(data, callback){
    Customer.create({
        cif: data.cif,
        name: data.name
    }).then(
        (customer) => {
            callback(null, customer)
        }
    )
}


function login(callback, filter){
    console.log(`filter: ${JSON.stringify(filter)}`)
    Customer.findOne({
        where: filter
    }).then(
        (customers)=>{
            callback(null, customers);
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

module.exports = {getList, getById, insert, update, remove, login};
