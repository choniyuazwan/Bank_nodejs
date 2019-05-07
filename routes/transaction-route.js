const express = require('express');
const transactionDao = require('../dao/transaction-dao');
const resp = require('../models/response');

const TransactionRoute = express.Router();

TransactionRoute.get('/transactions', (req, res)=>{
    let filter = {};
    
    if(req.query.cif){
        filter.cif = req.query.cif;
    }
    transactionDao.getList(function(error, result){
        if(error){
            resp.notOk(res, error);
        }else{
            resp.ok(res, result);
        }
    }, filter);
})

module.exports = TransactionRoute;