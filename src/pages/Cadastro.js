
import React, { useState } from 'react';
import { auth, firestore } from '../firebaseconfig';
import { Link } from 'react-router-dom';



const Cadastro = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    dataNascimento: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastro = async () => {
    try {
      const { email, senha, nome, sobrenome, dataNascimento } = formData;
      const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
      const { uid } = userCredential.user;
      
      await firestore.collection('usuarios').doc(uid).set({
        nome,
        sobrenome,
        dataNascimento
        
        
      });

      console.log('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="text" name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} />
      <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
      <Link to="/login">
      <button onClick={handleCadastro}>Cadastrar</button>
      </Link>
    </div>
  );
};

export default Cadastro;
