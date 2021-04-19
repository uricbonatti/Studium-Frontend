import React from 'react';
import './styles.css'
import { User } from '../../hooks/auth';

import {
  FiCoffee,
  FiZap,
  FiFileText,
  FiThumbsUp,
  FiEdit,
} from 'react-icons/fi';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';



type ICardUserProps = {
  title?: string
  avatar_url?: string
  user?: User
  className: string
  posts?: IPost[]

};

interface IPost {
  id: string;
  title: string;
  created_at: Date;
}

const CardUser: React.FC<ICardUserProps> = ({ className, title, avatar_url, user, posts }) => {
  

  return (
    <div className="container">
      <div className={className}>
        <header >
          <div >
            <img src={avatar_url} alt={user?.name} />
            <h1>{title? title : user?.name}</h1>
          </div>
        </header>
        <main>
          Teste main
          {/* {posts?.map((posts) => console.log(posts.id))} */}
          {console.log(posts)}
        </main>
        <footer >
              {user?.github && (
                <a href={`https://github.com/${user.github}`}>
                  <FaGithubSquare color="var(--color-text-contrast)" /> <p>{user.github}</p>
                </a>
              )}
        </footer>
      </div>
    </div>
  );
};

export default CardUser;
