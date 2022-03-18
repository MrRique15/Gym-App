const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { useReducer } = require('react/cjs/react.production.min');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/cadastro', (req, res) => {
    //Apenas para testes, pode ser apagado no futuro
    console.log(req.body);
    if(req.body.name == '' || req.body.surename == '' || req.body.email == '' || req.body.password == '' || req.body.confirmpassword == ''){
        res.send(JSON.stringify({error:'error',message:'Preencha todos os Campos!'}));
    
    }else{
        res.send(JSON.stringify({error:'cadastrar',message:'Cadastro realizado com sucesso!'}));
    
    }


    //Aguardando implementação do banco de dados
    // let response = await user.findOne({
    //     where:{name:req.body.name, surename:req.body.surename, email:req.body.email, password:req.body.password, confirmpassword:req.body.confirmpassword}
    // });
    // if (response == null){
    //     res.send('Usuário não cadastrado');
    // }else{
    //     res.send(response);
    // }
});

app.post('/login', (req, res) => {
    //Apenas para testes, pode ser apagado no futuro
    console.log(req.body);
    if(req.body.email == '' || req.body.password == ''){
        res.send({error:'error',message:'Preencha todos os Campos!'});

    }else if(req.body.email == "pedro@cs.com" || req.body.email == "henrique@cs.com" || req.body.email == "renan@cs.com" || req.body.email == "danilo@cs.com"){
        if(req.body.password == "123456"){
            res.send(JSON.stringify({error:'logar',message:'Logado com sucesso!'}));
        }else{
            res.send(JSON.stringify({error:'error',message:'Senha Incorreta'}));
        }

    }else{
        res.send(JSON.stringify({error:'error',message:'Email Incorreto!'}));
    }




    // let response = await user.findOne({
    //     where:{email:req.body.email, password:req.body.password}
    // });
    // if (response == null){
    //     res.send('Usuário não cadastrado');
    // }else{
    //     res.send(response);
    // }
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res)=>{
    console.log('Server is running on port ' + port);
})
