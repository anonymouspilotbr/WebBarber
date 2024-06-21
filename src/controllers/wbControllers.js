function loginView(req, res){
    res.render('login.html');
}

function cadastroView(req, res){
    res.render('cadastro.html');
}

function homeView(req, res){
    res.render('index.html');
}

const Usuario = require('../models/usuario');

function cadastrarUsuario(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento
    }
    
    Usuario.create(usuario).then(()=>{
        let sucesso = true;
        res.render("login.html", {sucesso});
    }).catch((err)=>{
        console.log(err);
        let erro = true;
        res.render("cadastro.html", {erro});
    });

}

module.exports = {
    loginView,
    cadastroView,
    cadastrarUsuario,
    homeView
}