module.exports = (sequelize, DataTypes) => {
    const WalletAccount = sequelize.define('walletAccount', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, {
            tableName: 'wallet_account',
            timestamps: false
        });

    return WalletAccount;
};
