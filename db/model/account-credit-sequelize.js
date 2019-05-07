module.exports = (sequelize, DataTypes) => {
    const AccountCredit = sequelize.define('accountCredit', {
        accountNumber: {
            field: 'account_number',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        accountName: {
            field: 'account_name',
            type: DataTypes.STRING
        },
        balance: {
            field: 'balance',
            type: DataTypes.INTEGER
        },
        openDate: {
            field: 'open_date',
            type: DataTypes.STRING
        },
    }, {
            tableName: 'account',
            timestamps: false
        });

    return AccountCredit;
};
