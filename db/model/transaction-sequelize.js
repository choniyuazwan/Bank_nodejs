module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('transaction', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            field: 'amount',
            type: DataTypes.INTEGER
        },
        date: {
            field: 'date',
            type: DataTypes.STRING
        }
    }, {
            tableName: 'transaction',
            timestamps: false
        });

    return Transaction;
};
