# Gym-App

A mobile application for study purposes. The app is being developed in React Native.
<br/>
<p>Para o funcionamento da aplicação, os seguintes passos devem ser seguidos:</p>
<br/>
1) Instalar as dependências para o projeto:
  <p>Comando -> yarn install</p>
<br/>
2) Iniciar a aplicação:
  <p>Comando -> yarn start</p>
<br/>
3) Abrir painel desenvolvedor do EXPO:
  <p>http://localhost:19002/</p>
<br/>
4) Coletar apenas o endereço IP constante no painel desenvolvedor.
<br/>
<br/>
5) Alterar o endereço IP em todas as ocorrências de funções do tipo fetch.
<p>Arquivos à serem alterados:</p>
- Components -> profilePic.js<br/>
- Cadastro -> index.js<br/>
- CompletarCadastro -> index.js<br/>
- Perfil -> index.js<br/>
- RecuperarSenha -> index.js<br/>
- RecuperarSenha2 -> index.js<br/>
- Signin -> index.js<br/>
- Treinos -> index.js<br/>
<br/>
6) Reiniciar a aplicação, pois agora as conexões backend estarão em funcionamento.
<br/>
<br/>
OBS: Ao criar uma conta, um e-mail deve ser enviado contendo o código de autenticação, porém por ser uma API gratuita, alguns problemas podem ocorrer, como a mensagem cair na caixa de spam, ou ser deletada pelo próprio e-mail, porém esse código permanece salvo no banco de dados para cada usuário, basta checar no banco de dados para utilizar ao criar o cadastro, caso o e-mail não chegue de nenhuma forma. (Os emails do @uem.com funcionaram, aparecendo o codigo na caixa de spam)
