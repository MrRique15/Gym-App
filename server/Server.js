const express = require('express');
const mongoose = require('mongoose');
const User = require('./UserSchema');


const app = express();

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
    console.log(req.body);

    let response = await User.find({name:req.body.name, surename:req.body.surename, email:req.body.email});

    if(req.body.name == '' || req.body.surename == '' || req.body.email == '' || req.body.password == '' || req.body.confirmpassword == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha todos os Campos!'}));
    }else if(req.body.password != req.body.confirmpassword){
        res.send(JSON.stringify({error:'error',message:'As senhas não são iguais!'}));
    }else if (response.length == 0){
        console.log("Usuário nao cadastrado!");
        const user = await User.create({ 
            name: req.body.name,
            surename: req.body.surename,
            email: req.body.email,
            password: req.body.password
        });
        console.log(user);
        res.send(JSON.stringify({error:'cadastrar',message:'Cadastro realizado com sucesso!'}));
    }else{
        res.send(JSON.stringify({error:'error',message:'Usuário já cadastrado!'}));
    }
});

app.post('/login', async (req, res) => {
    console.log(req.body);

    let response = await User.find({email:req.body.email, password:req.body.password});
    if(req.body.email == '' || req.body.password == ''){
        res.send({error:'error',message:'Preencha todos os Campos!'});
    }else if (response.length == 0){
        res.send(JSON.stringify({error:'error',message:'Login ou Senha incorretos!'}));
    }else if(response.email == req.body.email && response.password == req.body.password){
        res.send(JSON.stringify({error:'logar',message:'Logado com sucesso!'}));
    }
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res)=>{
    console.log('Server is running on port ' + port);
})
