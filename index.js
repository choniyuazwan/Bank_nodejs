const express = require('express')
const bodyParser = require('body-parser')
const customerRoute = require('./routes/customer-route')
const accountRoute = require('./routes/account-route')
const walletRoute = require('./routes/wallet-route')
const transactionRoute = require('./routes/transaction-route')
const walletAccountRoute = require('./routes/wallet-account-route')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(customerRoute);
app.use(accountRoute);
app.use(walletRoute);
app.use(transactionRoute);
app.use(walletAccountRoute);

const port = 3000
app.listen(port, () => {console.log(`App listening on port ${port}`)});