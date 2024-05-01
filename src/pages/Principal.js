import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../firebaseconfig'; 

const Principal = () => {
  const [userData, setUserData] = useState(null);
  


  const buscarDadosUsuario = async () => {
    try {
      const user = auth.currentUser; 
      if (user) {
        const usuarioRef = firestore.collection('usuarios').doc(user.uid);
        const snapshot = await usuarioRef.get();
        if (snapshot.exists) {
          setUserData(snapshot.data());
        } else {
          console.log('Nenhum dado de usuário encontrado');
        }
      } else {
        console.log('Nenhum usuário autenticado encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error.message);
    }
  };

  
  useEffect(() => {
    buscarDadosUsuario();
  }, []);

  
  return (
    <div>
      <h2>Dados do Usuário</h2>
      {userData && (
        <div>
          <p><strong>Nome:</strong> {userData.nome}</p>
          <p><strong>Sobrenome:</strong> {userData.sobrenome}</p>
          <p><strong>Data de Nascimento:</strong> {userData.dataNascimento}</p>
        </div>
      )}
    </div>
  );
};

export default Principal;
