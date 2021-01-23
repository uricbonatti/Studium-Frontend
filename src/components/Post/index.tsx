import React, {ReactNode } from 'react';
import { Posts } from '../../utils/types'
import './styles.css';

type Props = {
  post: Posts
}

const  handleLike = () => {alert("Gostei")}
const  handleImprove = () => {alert("Melhorar")}
const  handleDenounce = () => {alert("Denunciar")}
const  handleRead = () => {alert("Ler")}
const  handleEdit = () => {alert("Editar")}

const Post: React.FC<Props> = ({post}) => {
  return (
    <div className="post-card-container">
      <header className="post-card-header">
        <div>
          <img className="post-card-header-avatar" src={post?.image_url} alt="Avatar" />
        </div>
        <main>
          <h1>{post.title}</h1>
          <h4>Publicado por: {post.author?post.author:"Anonimo"}</h4>
        </main>
      </header>
      <div className="post-card-description">
        {post.body}
      </div>
      <footer className="post-card-footer">
        <div 
          className="post-card-footer-button" 
          data-toggle="tooltip" 
          title="Gostei"
          onClick={handleLike}>🎁</div>
        <div 
          className="post-card-footer-button " 
          data-toggle="tooltip" 
          title="Precisa melhorar"
          onClick={handleImprove}>🥺</div>
        <div 
          className="post-card-footer-button " 
          data-toggle="tooltip" 
          title="Denunciar"
          onClick={handleDenounce}>🕵️‍♂️</div>
        <div 
          className="post-card-footer-button " 
          data-toggle="tooltip" 
          title="Ler na integra"
          onClick={handleRead}>🔎</div>
        <div 
          className="post-card-footer-button " 
          data-toggle="tooltip" 
          title="Editar"
          onClick={handleEdit}>✍</div>
      </footer>
    </div>
  );
};

export default Post;
