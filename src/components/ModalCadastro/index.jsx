import React from "react";
//import Input from "../Input-form";
import "./style.css";


export function ModalCadastro() {
    return (
 <div className="form">

  <div class="input-group">


    <div className="input-form">
         <label for="nomecompleto">Nome Completo</label>
         <input id="nomecompleto" type="text"></input>
     </div>
      <div className="input-form">
         <label for="cpf">CPF</label>
         <input id="cpf" type="text"></input>
     </div>
     <div className="input-form">
     <label for="telefone">Telefone</label>
      <input type="tel" id="telefone" class="input-padrao" required placeholder="(xx) xxxxx-xxxx"></input>
     </div>
     <div className="input-form">
         <label for="data">Data</label>
         <input type="date" name="data" required></input>
     </div>
     <div className="input-form">
         <label for="cep">CEP</label>
         <input id="cep" type="text"></input>
     </div>
     <div className="input-form">
         <label for="numero">Numero</label>
         <input id="numero" type="text"></input>
     </div>
     <div className="input-form">
         <label for="rua">Rua</label>
         <input id="rua" type="text"></input>
     </div>
     <div className="input-form">
         <label for="bairro">Bairro</label>
         <input id="bairro" type="text"></input>
     </div> 
     <div className="input-form">
         <label for="e-mail">E-mail</label>
         <input id="e-mail" type="text"></input>
     </div> 
     <div className="input-form">
     <label for="senha">Senha</label>
      <input id="senha" type="password" name="senha" required></input>
     </div> 

     </div>

     <div class="cadastrase-button">
      <button>Cadastra se</button>
        </div>

    <div class="cancelar-button">
      <button>Cancelar</button>
        </div>



     </div>      
  
    );
}
