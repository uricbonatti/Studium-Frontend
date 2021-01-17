import React from 'react';
import Avatar from './img_avatar.png'

import './styles.css';

const Post: React.FC = () => {
  return (
    <div className="post-card-container">
      <header className="post-card-header">
        <div>
          <img className="post-card-header-avatar" src={Avatar} alt="Avatar" />
        </div>
        <div>
          <h1>Como programar em Node, React e React Native</h1>
          <h5>por Fulano de Tal há 3 dias </h5>
        </div>
      </header>
      <div className="post-card-description">
        <p>Ferramentas usadas são as melhores</p>
        <p>
          {' '}
          Declarativo

          React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.
          Views declarativas fazem com que seu código seja mais previsível e simples de depurar.

        </p>
      </div>
      <footer className="post-card-footer">
        {' '}
        <div className="post-card-footer-button" data-toggle="tooltip" title="Gostei">🎁</div>
        <div className="post-card-footer-button " data-toggle="tooltip" title="Precisa melhorar">🥺</div>
        <div className="post-card-footer-button " data-toggle="tooltip" title="Denunciar">🕵️‍♂️</div>
        <div className="post-card-footer-button " data-toggle="tooltip" title="Ler na integra">🔎</div>
        <div className="post-card-footer-button " data-toggle="tooltip" title="Editar">✍</div>
      </footer>
    </div>
  );
};

export default Post;
