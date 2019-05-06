module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define('wallet', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            field: 'description',
            type: DataTypes.STRING
        },
        createdDate: {
            field: 'created_date',
            type: DataTypes.STRING
        }
    }, {
            tableName: 'wallet',
            timestamps: false
        });

    return Wallet;
};
