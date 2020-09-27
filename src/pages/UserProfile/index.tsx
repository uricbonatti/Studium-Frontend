import React from 'react';
import {
  Container,
  ProfileSummary,
  Box,
  Activity,
  PostPublished,
  Title,
  SocialNetwork,
} from './styles';

import Header from '../../components/Header';
import { useAuth } from '../../hooks/auth';
import defaultAvatar from '../../assets/default-user-img.jpg';
import ExpBar from '../../components/ExpBar';
import { FiShare2, FiCoffee, FiZap } from 'react-icons/fi';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const activitySum = {
  posts: 2,
  comments: 16,
  exp: 1500,
};

const UserProfile: React.FC = () => {
  const { user } = useAuth();
  console.table(user);
  const expPercent = 80;
  return (
    <>
      <Header />
      <Container>
        <ProfileSummary className="profile">
          <img src={user.avatar || defaultAvatar} alt={user.name} />
          <div>
            <div>
              <h1>
                {user.name}
                <strong>{`[ Level ${user.level} ]`}</strong>
              </h1>
            </div>
            <ExpBar expPercent={expPercent} expColor="red" />
            <p>{user.description}</p>
            <SocialNetwork>
              {user.linkedin && (
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/uric-bonatti-cardoso-820275132/"
                >
                  <FaLinkedin /> {user.name}
                </a>
              )}
              {user.github && (
                <a
                  className="github"
                  href={`https://github.com/${user.github}`}
                >
                  <FaGithubSquare /> {user.github}
                </a>
              )}
            </SocialNetwork>
          </div>
        </ProfileSummary>
        <Box id="badges">
          <Title>Conquistas</Title>
          <strong>Conquistas</strong>
        </Box>
        <Box id="papers">
          <p>Posts Recentes</p>
          <PostPublished>
            <p>Testes de Publicação</p>
            <span>27 set.</span>
          </PostPublished>
          <PostPublished>
            <p>Testes de Publicação</p>
            <span>27 set.</span>
          </PostPublished>
          <PostPublished>
            <p>Testes de Publicação</p>
            <span>27 set.</span>
          </PostPublished>
          <PostPublished>
            <p>Testes de Publicação</p>
            <span>27 set.</span>
          </PostPublished>
          <PostPublished>
            <p>Testes de Publicação</p>
            <span>27 set.</span>
          </PostPublished>
          <PostPublished>
            <p>Testes de Publicação</p>
            <span>27 set.</span>
          </PostPublished>
          <PostPublished>
            <p>Testes de Publicação</p>
            <span>27 set.</span>
          </PostPublished>
          <PostPublished>
            <p>Testes de Publicação</p>
            <span>27 set.</span>
          </PostPublished>
          <PostPublished>
            <p>Testes de Publicação</p>
            <span>27 set.</span>
          </PostPublished>
        </Box>
        <Box id="activity">
          <p>Resumo das Atividades da Semana</p>
          <Activity>
            <FiShare2 />
            {activitySum.posts} Posts
          </Activity>
          <Activity>
            <FiCoffee />
            {activitySum.comments} Comentarios
          </Activity>
          <Activity>
            <FiZap />
            {activitySum.exp} XP
          </Activity>
        </Box>
        <Box id="interactions">
          <p>Interações</p>
        </Box>
      </Container>
    </>
  );
};

export default UserProfile;
