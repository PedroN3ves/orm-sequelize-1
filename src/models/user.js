const { Model, DataTypes } = require('sequelize');

// 'class User' = Tabela de Usuário
// 'extends Model' = Referência ao modelo da tabela no banco de dados
class User extends Model {
    static init(connection){ // static = função estática, ou seja, não poderá ter nenhuma aleração em sua estrutura
        super.init(
            {
                name: DataTypes.STRING, 
                email: DataTypes.STRING
            },
            {
                sequelize: connection
            }
        )
    }; 
};

module.exports = User