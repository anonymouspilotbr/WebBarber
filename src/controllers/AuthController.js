const Usuario = require('../models/usuario');

async function autenticar(req, res){
    console.log(req.session);
    const usuario = await Usuario.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });

    if(usuario !== null){
        req.session.autorizado = true;
        req.session.usuario = usuario;
        req.session.nome = usuario.nome;
        req.session.email = usuario.email;
        res.redirect('/home');
    }else{
        let erro_Auth = true;
        res.render('login.html', {erro_Auth});
    }
}

function homeView(req, res){
    res.render('index.html');
}

function perfilView(req, res){
    res.render('perfil.html', { nome: req.session.nome, email: req.session.email });
}

function sair(req, res){
    req.session.destroy();
    res.redirect('/');
}

function verificarAuth(req, res, next){
    if(req.session.autorizado){
        console.log('Usuario autorizado.');
        next();
    }
    else{
        console.log('Usuario não autorizado');
        res.redirect('/');
    }
}

module.exports = {
    autenticar,
    homeView,
    verificarAuth,
    perfilView,
    sair
};