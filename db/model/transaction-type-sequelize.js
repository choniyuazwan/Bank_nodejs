module.exports = (sequelize, DataTypes) => {
    const TransactionType = sequelize.define('transactionType', {
        code: {
            field: 'code',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        description: {
            field: 'description',
            type: DataTypes.STRING
        },
        account_type: {
            field: 'account_type',
            type: DataTypes.STRING
        }
    }, {
        tableName: 'transaction_type',
        timestamps: false
    });

    return TransactionType;
};
