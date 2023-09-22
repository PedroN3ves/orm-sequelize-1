const User = require('../models/user');

module.exports = {
    async index(request, response) {
        const users = await User.findAll({ raw: true });

        return response.json(users);
    },
    async index1(request, response) {
        const { id } = request.params;
        const users = await User.findByPk( id );

        return response.json(users);
    },
    async store(request, response) {
        const { name, email } = request.body;
        const user = await User.create({ name, email });

        return response.json(user);
    },
    async update(request, response) {
        const { id } = request.params;
        const { name, email } = request.body;

        const updateUser = await User.update({ name, email }, { where: { id: id }});

        return response.json(updateUser);
    },
    async delete(request, response) {
        const { id } = request.params;
        const user = await User.destroy({ where: { id } });

        return response.json(user);
    }
};