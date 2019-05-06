module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        cif: {
            field: 'cif',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        firstName: {
            field: 'firstname',
            type: DataTypes.STRING
        },
        lastName: {
            field: 'lastname',
            type: DataTypes.STRING
        },
        birthDate: {
            field: 'birthdate',
            type: DataTypes.STRING
        },
        username: {
            field: 'username',
            type: DataTypes.STRING
        },
        password: {
            field: 'password',
            type: DataTypes.STRING
        },
    }, {
        tableName: 'customer',
        timestamps: false
    })

    return Customer;
}