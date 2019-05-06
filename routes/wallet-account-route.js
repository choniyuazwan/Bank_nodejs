const express = require('express');
const walletAccountDao = require('../dao/wallet-account-dao');
const resp = require('../models/response');

const WalletAccountRoute = express.Router();

WalletAccountRoute.get('/walletaccounts', (req, res)=>{
    let filter = {};
    
    if(req.query.address){
        filter.address = req.query.address;
    }
    walletAccountDao.getList(function(error, result){
        if(error){
            resp.notOk(res, error);
        }else{
            resp.ok(res, result);
        }
    }, filter);
})

// CustomerRoute.get('/customer/:cif', (req, res)=>{
//     customerDao.getById(req.params['cif'], function(error, result){
//         if(error){
//             resp.notOk(res, error);
//         }else if(result){
//             resp.ok(res, result);
//         }else{
//             resp.notFound(res, req.params.cif);
//         }
//     });
// })

// CustomerRoute.post('/customer', (req, res, next) => {
//     customerDao.insert(req.body, function(error, result){
//         if(error){
//             resp.notOk(res, error);
//         }else{
//             resp.ok(res, result);
//         }
//     });
// });

// CustomerRoute.put('/customer/:cif', (req, res, next) => {
//     customerDao.update(req.params.cif, req.body, function(error, result){
//         if(error){
//             resp.notOk(res, error);
//         }else if(result){
//             resp.ok(res, result);
//         }else{
//             resp.notFound(res, req.params.cif);
//         }
//     });
// });

// CustomerRoute.delete('/customer/:cif', (req, res, next) => {
//     customerDao.remove(req.params.cif, function(error, result){
//         if(error){
//             resp.notOk(res, error);
//         }else if(result){
//             resp.ok(res, result);
//         }else{
//             resp.notFound(res, req.params.cif);
//         }
//     });
// });
  
module.exports = WalletAccountRoute;
