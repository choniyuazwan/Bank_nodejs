module.exports = (sequelize, DataTypes) => {
    const WalletAccount = sequelize.define('walletAccount', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        // walletId: {
        //     field: 'wallet_id',
        //     type: DataTypes.INTEGER,
        // },
        // accountNUmber: {
        //     field: 'account_number',
        //     type: DataTypes.INTEGER
        // },
        // cif: {
        //     field: 'cif',
        //     type: DataTypes.INTEGER
        // },
    }, {
            tableName: 'wallet_account',
            timestamps: false
        });

    return WalletAccount;
};
