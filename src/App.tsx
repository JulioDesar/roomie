import { Route, Routes } from 'react-router-dom';
import './App.css';
import AtualizarForm from './components/Modal-Atualizar';
import CadastroForm from './components/Modal-Cadastro';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
        <Route path="/cadastrar" element={<RequireAuth><CadastroForm /></RequireAuth>} />
        <Route path="/atualizar" element={<RequireAuth><AtualizarForm /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
