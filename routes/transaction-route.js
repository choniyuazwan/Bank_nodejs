const express = require('express');
const transactionDao = require('../dao/transaction-dao');
const resp = require('../models/response');

const TransactionRoute = express.Router();

TransactionRoute.get('/transactions', (req, res)=>{
    transactionDao.getList(function(error, result){
        if(error){
            resp.notOk(res, error);
        }else{
            resp.ok(res, result);
        }
    });
})

TransactionRoute.get('/customer/:cif/transactions', (req, res)=>{
    transactionDao.getListByCif(req.params['cif'], function(error, result){
        if(error){
            resp.notOk(res, error);
        }else if(result){
            resp.ok(res, result);
        }else{
            resp.notFound(res, req.params.cif);
        }
    });
})

module.exports = TransactionRoute;