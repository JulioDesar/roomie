import React from "react";
import "./style.css";

import { ModalCadastro } from "../../components/ModalCadastro";
import "./style.css";

function Teste() {
   
    return (
  

  <main>
    
    <div className="geral">

      <div className="form-image">
      <img src="./logo.svg" alt="Logo da Roomie" />
      </div>

      <div className="form">
      <ModalCadastro />
      </div>

    </div>
  
  </main> 
    );
}

export default Teste;