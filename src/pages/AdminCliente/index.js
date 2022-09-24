import "./style.css";
import MenuLateral from "../../components/Menu-lateral";
import Navbar from "../../components/NavBar";
import Table from "../../components/Table";

import "./style.css";

function Admin() {
  
  return (
  <main>

    <section className="menu">
    <MenuLateral />
    </section>
  
    <article className="navBar">
    <Navbar />
    <section className="AdminTable-Container">
      <div className="tabela">
      <Table />
      
      </div>
     
    </section> 

    </article>

    
  </main>
  );
}

export default Admin;