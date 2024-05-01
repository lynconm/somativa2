import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebaseconfig'; 

const Login = () => {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [erro, setErro] = useState(null);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, senha } = formData;
      await auth.signInWithEmailAndPassword(email, senha);
      history.push('/principal');
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {erro && <p>{erro}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
