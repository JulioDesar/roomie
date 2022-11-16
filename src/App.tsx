import { Route, Routes } from 'react-router-dom';
import './App.css';
import AtualizarForm from './components/Modal-Atualizar/ModalAtualizar';
import CadastroForm from './components/Modal-Cadastro/ModalCadastro';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Admin from './pages/Admin/Admin';
import Imovel from './pages/Imovel/Imovel';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
        <Route path="/imovel" element={<RequireAuth><Imovel /></RequireAuth>} />
        <Route path="/cadastrar" element={<RequireAuth><CadastroForm /></RequireAuth>} />
        <Route path="/atualizar" element={<RequireAuth><AtualizarForm /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
