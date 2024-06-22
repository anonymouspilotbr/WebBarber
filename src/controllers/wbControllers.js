const Usuario = require('../models/usuario');

function loginView(req, res){
    res.render('login.html');
}

function cadastroView(req, res){
    res.render('cadastro.html');
}

function homeView(req, res){
    res.render('index.html');
}

function homeViewTime(req, res){
    res.render('index_time.html');
}

async function alterarDados(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.session.usuario.id);
      if (!usuario) {
        res.status(404).send({ message: 'Usuário não encontrado' });
        return;
      }

      let novoNome = req.body.nome;
      let novoEmail = req.body.email;
      let novaSenha = req.body.senha;
  
      usuario.nome = novoNome;
      usuario.email = novoEmail;
      usuario.senha = novaSenha;
  
      await usuario.save();
  
      req.session.usuario.nome = novoNome;
      req.session.usuario.email = novoEmail;
      await req.session.save();

      res.redirect('/perfil');
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Erro ao atualizar dados do usuário' });
    }
  }

function agendarServico(req, res){
    const { servico, profissional, horario } = req.body;
    res.render('perfil.html');
}

function cadastrarUsuario(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
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
    agendarServico,
    alterarDados,
    homeView,
    homeViewTime,
}