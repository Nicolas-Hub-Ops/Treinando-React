const AdminModel = require('../models/Admins');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function crypto(password) {
    const rounds = 12;
    return bcrypt.hashSync(password, rounds);
};

class ControllerAdmin {
    static listAdmin = async (req, res) => {
        const adminModel = await AdminModel.find();
        return res.json(adminModel);
    };

    static listAdminId = async (req, res) => {
        const id = req.params.id;
        AdminModel.findById(id, (err, response) => {
            if(err) {
                res.status(500).send({error: err.message})
            } else {
                res.status(200).send(response)
            }
        })
    };

    static listAdminUsername = async (req, res) => {
        const username = req.params.username;
        AdminModel.find({'username': username}, (error, success) => {
            if(error) {
                res.status(500).send({error: error.message})
            } else {
                if(success.length === 0) {
                    res.status(404).json({ error: "Não existe Administrador com esse username"})
                } else {
                    res.status(202).send(success)
                }
            }
        })
    };

    static successLogin = (req, res) => {
        const token = jwt.sign({ userId: 1 }, 'alt', { expiresIn: 10 })
        return res.json({ auth: true, token });
    };

    static login = async (req, res) => {
        res.status(204);
    }

    static createAdmin = async (req, res) => {
        crypto('Sharenergy')
        const adminModel = await AdminModel.create({
            username: req.body.username,
            nome: req.body.nome,
            nascimento: req.body.nascimento,
            email: req.body.email,           
            password: crypto(req.body.password),
            adminToken: process.env.TOKEN_ADMIN
        })
        return res.status(201).json(adminModel);
    };

    static deleteAdmin = async (req, res) => {
        const id = req.params.id;
        const adminModel = await AdminModel.findById(id);
        await adminModel.remove();
        return res.send({message: 'Administrador deletado com sucesso'});
    };
}

module.exports = ControllerAdmin;