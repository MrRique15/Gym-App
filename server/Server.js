const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./UserSchema');
const smtp = require('./smtp');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB -----------------------------------------------------------------------------------
const mongoUri = "mongodb+srv://root:admin@gymapp.hj2zp.mongodb.net/gymapp?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
});
mongoose.connection.on('connected', () => {
    console.log("Connected to Mongo DB");
});
mongoose.connection.on('error', (err) => {
    console.log("Error to connect to Mongo DB", err);
});
//-------------------------------------------------------------------------------------------------------

app.post('/cadastro', async (req, res) => {
    let response = await User.findOne({email:req.body.email});

    if(req.body.email == '' || req.body.password == '' || req.body.confirmpassword == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha todos os Campos!'}));
    }else if(req.body.password != req.body.confirmpassword){
        res.send(JSON.stringify({error:'error',message:'As senhas não são iguais!'}));
    }else if (response == null){
        const user = await User.create({ 
            name: '',
            surename: '',
            email: req.body.email,
            password: req.body.password,
            age: 0,
            height: 0.00,
            weight: 0.00,
            code: 000000
        });
        res.send(JSON.stringify({error:'cadastrar',message:'Cadastro realizado com sucesso!'}));
    }else{
        res.send(JSON.stringify({error:'error',message:'Este e-mail já está em uso!'}));
    }
});

app.post('/login', async (req, res) => {
    let response = await User.findOne({email:req.body.email, password:req.body.password});
    if(req.body.email == '' || req.body.password == ''){
        res.send({error:'error',message:'Preencha todos os Campos!'});
    }else if (response == null){
        res.send(JSON.stringify({error:'error',message:'Login ou Senha incorretos!'}));
    }else if(response.email == req.body.email && response.password == req.body.password){
        if(response.name == '' || response.surename == ''){
            res.send(JSON.stringify({error:'incomplete',message:'Finalize seu cadastro!'}));
        }else{
            res.send(JSON.stringify({error:'logar',message:'Logado com sucesso!',name:response.name,surename:response.surename,email:response.email}));
        }
    }
});

app.post('/completarcadastro', async (req, res) => {
    let response = await User.findOne({email:req.body.email});
    if (response == null){
        res.send(JSON.stringify({error:'error',message:'Usuário não encontrado!'}));
    }else if(req.body.name == '' || req.body.surename == '' || req.body.age == '' || req.body.weight == '' || req.body.height == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha todos os Campos!'}));
    }else{
        User.updateOne({email:req.body.email},{
            name: req.body.name,
            surename: req.body.surename,
            age: parseInt(req.body.age),
            weight: parseFloat(req.body.weight),
            height: parseFloat(req.body.height),
            code: 000000
        }, function(err, result){
            if(err){
                res.send(JSON.stringify({error:'error',message:'Erro ao completar Cadastro!'}));
            }else{
                res.send(JSON.stringify({error:'cadastrocompleto',message:'Cadastro finalizado com sucesso!'}));
            }
        });
    }
});

app.post('/sendCode', async (req, res) => {
    let response = await User.findOne({email:req.body.email});
    if (response == null){
        res.send(JSON.stringify({error:'error',message:'Usuário não encontrado!'}));
    }else if(req.body.email == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha um email!'}));
    }else{
        let passCode = Math.floor(Math.random() * (999999 - 100000) + 100000);
        smtp.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ra115408@uem.br",
            Password : "A611380C1B13C823A55E88645DCDCFDA03C6",
            To : response.email,
            From : "ra115408@uem.br",
            Subject : "Fit In - Recuperação de Senha",
            Body : "Seu código de recuperação é: "+passCode+"\nUtilize o mesmo na aba Recuperar Senha, para redefinir sua senha no aplicativo.\n\nAtenciosamente,\nEquipe Fit In"
        }).then(
          message => alert(message)
        );
        User.updateOne({email:req.body.email},{
            code: passCode
        }, function(err, result){
            if(err){
                res.send(JSON.stringify({error:'error',message:'Erro ao enviar código!'}));
            }else{
                res.send(JSON.stringify({error:'codecreated',message:'Código enviado com sucesso!'}));
            }
        });
    }
});

app.post('/validateCode', async (req, res) => {
    let response = await User.findOne({email:req.body.email});
    if (response == null){
        res.send(JSON.stringify({error:'error',message:'Usuário não Encontrado!'}));
    }else if(req.body.email == '' || req.body.code == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha email e código!'}));
    }else{
        if(parseInt(response.code) == parseInt(req.body.code)){
            res.send(JSON.stringify({error:'codevalidated',message:'Código correto!',email:response.email}));
        }else{
            res.send(JSON.stringify({error:'error',message:'Código inválido!'}));
        }
    }
});

app.post('/recPassword', async (req, res) => {
    let response = await User.findOne({email:req.body.email});
    if (response == null){
        res.send(JSON.stringify({error:'error',message:'Usuário não encontrado!'}));
    }else if(req.body.password == '' || req.body.password2 == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha todos os campos!'}));
    }else if(req.body.password != req.body.password2){
        res.send(JSON.stringify({error:'error',message:'As senhas não são iguais!'}));
    }else{
        User.updateOne({email:req.body.email},{
            password: req.body.password,
            code: 000000
        }, function(err, result){
            if(err){
                res.send(JSON.stringify({error:'error',message:'Erro ao redefinir senha!'}));
            }else{
                res.send(JSON.stringify({error:'passchanged',message:'Senha redefinida com sucesso!'}));
            }
        });
    }
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res)=>{
    console.log('Server is running on port ' + port);
})
