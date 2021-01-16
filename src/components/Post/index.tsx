import React from 'react';
import './styles.css';

const Post: React.FC = () => {
  return (
    <div className="post-card-container">
      <header className="post-card-header">
        <h1>Como programar em React</h1>
      </header>
      <div className="post-card-description">
        <p>Ferramentas usadas são as melhores</p>
        <p>
          {' '}
          id: ObjectID; title: string; image_url: string; body: string; author:
          OmitedUser; users_liked: MongoObjectID[]; category: Category; tags:
          Tag[]; slug: string; created_at: Date; updated_at: Date;
        </p>
      </div>
      <footer className="post-card-footer">
        <h3>link</h3>
      </footer>
    </div>
  );
};

export default Post;
