const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./Schemas/UserSchema');
const Dieta = require('./Schemas/DietaSchema');
const Treino = require('./Schemas/TreinoSchema');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Errors Exception to not Crash ------------------------------------------------------------------------
process.on('uncaughtException', (error, origin) => {
    console.log('----- Uncaught exception -----');
    console.log(error);
    console.log('----- Exception origin -----');
    console.log(origin);
});
process.on('unhandledRejection', (reason, promise) => {
    console.log('----- Unhandled Rejection at -----');
    console.log(promise);
    console.log('----- Reason -----');
    console.log(reason);
});
//-------------------------------------------------------------------------------------------------------

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

//Email Sender Connection--------------------------------------------------------------------------------
const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    auth: {
        user: 'ra115408@uem.br',
        pass: 'A611380C1B13C823A55E88645DCDCFDA03C6'
    }
});
const emailFrom = {email: 'ra115408@uem.br'};
//-------------------------------------------------------------------------------------------------------

app.post('/cadastro', async (req, res) => {
    if(req.body.email == '' || req.body.password == '' || req.body.confirmpassword == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha todos os Campos!'}));
    }else{ 
        let response = await User.findOne({email:req.body.email});

        if(req.body.password != req.body.confirmpassword){
            res.send(JSON.stringify({error:'error',message:'As senhas não são iguais!'}));
        }else if(req.body.email.indexOf('@') == -1){
            res.send(JSON.stringify({error:'error',message:'Email inválido!'}));
        }else if(req.body.password.length < 6){
            res.send(JSON.stringify({error:'error',message:'A senha deve ter no mínimo 6 caracteres!'}));
        }else if (response == null){
            let confirmCode = Math.floor(Math.random() * (999999 - 100000) + 100000);
            let confirmationSended = await transporter.sendMail({
                from: emailFrom.email,
                to: req.body.email,
                subject: "Fit In - Confirmação de Cadastro",
                html: `<h1>Seu código de confirmação é:</h1><h2>${confirmCode}</h2><h4>Utilize o mesmo para concluir seu cadastro em nosso aplicativo.<br;>Para concluir seu cadastro, basta realizar login no aplicativo com seu e-mail e senha, e preencher as informações restantes.<br/>Atenciosamente,<br/>Equipe Fit In</h4>`
            });
            if(confirmationSended){
                const user = await User.create({ 
                    name: '',
                    surename: '',
                    email: req.body.email,
                    password: req.body.password,
                    age: 0,
                    height: 0.00,
                    weight: 0.00,
                    code: confirmCode,
                    imageURL: '',
                    tipoFisico: 'A definir',
                });
                const dieta = await Dieta.create({
                    email: req.body.email,
                    objetivo: 'Nenhum',
                    restricao: 'Nenhuma',
                });
                const treino = await Treino.create({
                    email: req.body.email,
                    treinoOne: 'Nenhum',
                    treinoTwo: 'Nenhum',
                    treinoThree: 'Nenhum'
                });
                res.send(JSON.stringify({error:'cadastrar',message:'Cadastro realizado com sucesso!'}));
            }else{
                res.send(JSON.stringify({error:'error',message:'E-mail inválido!'}));
            }
        }else{
            res.send(JSON.stringify({error:'error',message:'Este e-mail já está em uso!'}));
        }
    }
});

app.post('/login', async (req, res) => {
    if(req.body.email == '' || req.body.password == ''){
        res.send({error:'error',message:'Preencha todos os Campos!'});
    }else{
        let response = await User.findOne({email:req.body.email});
        if (response == null){
            res.send(JSON.stringify({error:'error',message:'Usuário não cadastrado!'}));
        }else if(response.password != req.body.password){
            res.send(JSON.stringify({error:'error',message:'Email ou Senha incorretos!'}));
        }else if(response.email == req.body.email && response.password == req.body.password){
            let treinos = await Treino.findOne({email:req.body.email});
            if(response.name == '' || response.surename == ''){
                res.send(JSON.stringify({error:'incomplete',message:'Finalize seu cadastro!',name:response.name,surename:response.surename,email:response.email,age:response.age,height:response.height,weight:response.weight,imageURL:response.imageURL,tipoFisico:response.tipoFisico,treinoOne:treinos.treinoOne,treinoTwo:treinos.treinoTwo,treinoThree:treinos.treinoThree}));
            }else{
                res.send(JSON.stringify({error:'logar',message:'Logado com sucesso!',name:response.name,surename:response.surename,email:response.email,age:response.age,height:response.height,weight:response.weight,imageURL:response.imageURL,tipoFisico:response.tipoFisico,treinoOne:treinos.treinoOne,treinoTwo:treinos.treinoTwo,treinoThree:treinos.treinoThree}));
            }
        }
    }
});

app.post('/completarcadastro', async (req, res) => {
    if(req.body.code == '' || req.body.name == '' || req.body.surename == '' || req.body.age == '' || req.body.weight == '' || req.body.height == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha todos os Campos!'}));
    }else{
        let response = await User.findOne({email:req.body.email});
        if (response.code != req.body.code){
            res.send(JSON.stringify({error:'error',message:'Código de confirmação incorreto!'}));
        }else{
            User.updateOne({email:req.body.email},{
                name: req.body.name,
                surename: req.body.surename,
                age: parseInt(req.body.age),
                weight: parseFloat(req.body.weight),
                height: parseFloat(req.body.height),
                code: 0,
                imageURL: '',
                tipoFisico: 'A definir',
            }, function(err, result){
                if(err){
                    res.send(JSON.stringify({error:'error',message:'Erro ao completar Cadastro!'}));
                }else{
                    res.send(JSON.stringify({error:'cadastrocompleto',message:'Cadastro finalizado com sucesso!'}));
                }
            });
        }
    }
});

app.post('/sendCode', async (req, res) => {
    if(req.body.email == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha um email!'}));
    }else{
        let response = await User.findOne({email:req.body.email});

        if (response == null){
            res.send(JSON.stringify({error:'error',message:'Usuário não encontrado!'}));
        }else{
            let passCode = Math.floor(Math.random() * (999999 - 100000) + 100000);
            let emailSended = await transporter.sendMail({
                from: emailFrom.email,
                to: response.email,
                subject: "Fit In - Recuperação de Senha",
                html: `<h1>Seu código de recuperação é:</h1><h2>${passCode}</h2><h4>Utilize o mesmo na aba Recuperar Senha, para redefinir sua senha no aplicativo.<br/>Atenciosamente,<br/>Equipe Fit In</h4>`
            });
            if(emailSended){
                User.updateOne({email:req.body.email},{
                    code: passCode
                }, function(err, result){
                    if(err){
                        res.send(JSON.stringify({error:'error',message:'Erro ao enviar código!'}));
                    }else{
                        res.send(JSON.stringify({error:'codecreated',message:'Código enviado com sucesso!'}));
                    }
                });
            }else{
                res.send(JSON.stringify({error:'error',message:'Erro ao enviar código!'}));
            }
        }
    }
});

app.post('/validateCode', async (req, res) => {
    if(req.body.email == '' || req.body.code == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha email e código!'}));
    }else{
        let response = await User.findOne({email:req.body.email});

        if (response == null){
            res.send(JSON.stringify({error:'error',message:'Usuário não Encontrado!'}));
        }else{
            if(parseInt(response.code) == parseInt(req.body.code)){
                res.send(JSON.stringify({error:'codevalidated',message:'Código correto!',email:response.email}));
            }else{
                res.send(JSON.stringify({error:'error',message:'Código inválido!'}));
            }
        }
    }
});

app.post('/recPassword', async (req, res) => {
    if(req.body.password == '' || req.body.password2 == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha todos os campos!'}));
    }else{
        let response = await User.findOne({email:req.body.email});

        if (response == null){
            res.send(JSON.stringify({error:'error',message:'Usuário não encontrado!'}));
        }else if(req.body.password != req.body.confirmPassword){
            res.send(JSON.stringify({error:'error',message:'As senhas não são iguais!'}));
        }else{
            User.updateOne({email:req.body.email},{
                password: req.body.password,
                code: 0
            }, function(err, result){
                if(err){
                    res.send(JSON.stringify({error:'error',message:'Erro ao redefinir senha!'}));
                }else{
                    res.send(JSON.stringify({error:'passchanged',message:'Senha redefinida com sucesso!'}));
                }
            });
        }
    }
});

app.post('/setImageBD', async (req, res) => {
    if(req.body.imageURL == ''){
        res.send(JSON.stringify({error:'error',message:'URL de Imagem inválido'}));
    }else{
        User.updateOne({email:req.body.email},{
            imageURL: req.body.imageURL
        }, function(err, result){
            if(err){
                res.send(JSON.stringify({error:'error',message:'Erro ao atualizar usuário!'}));
            }else{
                res.send(JSON.stringify({error:'imageDone',message:'Imagem alterada com Sucesso!'}));
            }
        });
    }
});

app.post('/saveDieta', async (req, res) => {
    let response = await Dieta.findOne({email:req.body.email});
    console.log('Procurando Dieta');
    if(response == null){
        res.send(JSON.stringify({error:'error',message:'Nenhuma dieta cadastrada!'}));
    }else{
        Dieta.updateOne({email:req.body.email},{
            email: req.body.email,
            objetivo: req.body.objetivo,
            restricao: req.body.restricao,
        }, function(err, result){
            if(err){
                res.send(JSON.stringify({error:'error',message:'Erro ao atualizar dieta!'}));
            }else{
                User.updateOne({email:req.body.email},{
                    tipoFisico: req.body.tipoFisico
                }, function(err, result){
                    if(err){
                        res.send(JSON.stringify({error:'error',message:'Erro ao atualizar Dieta!'}));
                    }else{
                        res.send(JSON.stringify({error:'dietasalva',message:'Dieta atualizada com Sucesso!'}));
                    }
                });
            }
        });
    }
});

app.post('/getDieta', async (req, res) => {
    let response = await Dieta.findOne({email:req.body.email});
    if(response == null){
        res.send(JSON.stringify({error:'error',message:'Nenhuma dieta cadastrada!'}));
    }else{
        res.send(JSON.stringify({error:'dieta',message:'Dieta encontrada!',objetivo:response.objetivo,restricao:response.restricao}));
    }
});

app.post('/saveTreino', async (req, res) => {
    Treino.updateOne({email:req.body.email},{
        treinoOne: req.body.treino01,
        treinoTwo: req.body.treino02,
        treinoThree: req.body.treino03,
    }, function(err, result){
        if(err){
            res.send(JSON.stringify({error:'error',message:'Erro ao atualizar treinos!'}));
        }else{
            res.send(JSON.stringify({error:'treino',message:'Treinos atualizados com Sucesso!'}));
        }
    });
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res)=>{
    console.log('Server is running on port ' + port);
})
