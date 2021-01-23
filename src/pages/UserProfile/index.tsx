import React, { useEffect, useState } from 'react';
import {
  FiCoffee,
  FiZap,
  FiFileText,
  FiThumbsUp,
  FiEdit,
} from 'react-icons/fi';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import Header from '../../components/Header';
import { useAuth, User } from '../../hooks/auth';
import defaultAvatar from '../../assets/default-user-img.jpg';
import ExpBar from '../../components/ExpBar';
import UserActivitySummaryQuery from '../../graphql/User/UserActivitySummaryQuery';
import graphqlApi from '../../services/graphqlApi';

import {
  Container,
  ProfileSummary,
  Box,
  Activity,
  Interaction,
  PostPublished,
  SocialNetwork,
  ScrollableContent,
  Description,
} from './styles';
import ModalEditUser from '../../components/ModalEditUser';
import { Link } from 'react-router-dom';

interface Post {
  id: string;
  title: string;
  created_at: Date;
}

interface IUserActivity {
  postsLiked: number;
  postsCreated: number;
  commentsLiked: number;
  commentsCreated: number;
}
export interface ISummary {
  lastWeek: IUserActivity;
  weekExp: number;
  lastWeekPosts: Post[];
}

const UserProfile: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [activity, setActivity] = useState<IUserActivity>({} as IUserActivity);
  const [exp, setExp] = useState<number>(0);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    graphqlApi
      .query({ query: UserActivitySummaryQuery, variables: { id: user.id } })
      .then((resp) => {
        console.table(resp);
        const {
          lastWeekPosts,
          weekExp,
          lastWeek,
        }: ISummary = resp.data.userSummary;
        setPosts([...lastWeekPosts]);
        setActivity({ ...lastWeek });
        setExp(weekExp);
      })
      .catch((err) => console.error(err));
  }, [user.id]);

  async function handleUpdateUser(
    userToEdit: Omit<User, 'id' | 'exp_percent' | 'level'>,
  ): Promise<void> {
    console.table(userToEdit);
  }

  function toggleUpdateModal(): void {
    setUpdateModalOpen(!updateModalOpen);
  }
  return (
    <>
      <Header />
      <ModalEditUser
        isOpen={updateModalOpen}
        setIsOpen={toggleUpdateModal}
        handleUpdateUser={handleUpdateUser}
        editingUser={user}
      />
      <Container>
        <ProfileSummary>
          <img src={user.avatar_url || defaultAvatar} alt={user.name} />
          <div>
            <div>
              <h1>
                {user.name}
                <strong>{`[ Level ${user.level} ]`}</strong>
              </h1>
            </div>
            <ExpBar expPercent={user.exp_percent} expColor="red" />
            {user.description && <Description>{user.description}</Description>}
            <SocialNetwork>
              {user.linkedin && (
                <a href={user.linkedin}>
                  <FaLinkedin color="blue" />
                  <p>{user.name}</p>
                </a>
              )}
              {user.github && (
                <a href={`https://github.com/${user.github}`}>
                  <FaGithubSquare color="#000" /> <p>{user.github}</p>
                </a>
              )}
            </SocialNetwork>
          </div>
          <div>
            ]
            <button type="button" onClick={() => toggleUpdateModal()}>
              <FiEdit size={30} color="red" />
            </button>
          </div>
        </ProfileSummary>
        <Box id="badges">
          <p>Conquistas</p>
          <strong>Conquistas</strong>
        </Box>
        <Box id="papers">
          <p>Posts Recentes</p>
          <ScrollableContent>
            {posts.map((post: Post) => (
              <PostPublished key={post.id}>
                <p>{post.title}</p>
                <span>{post.created_at}</span>
              </PostPublished>
            ))}
          </ScrollableContent>
        </Box>
        <Box id="activity">
          <p>Resumo das Atividades da Semana</p>
          <Activity>
            <FiZap />
            {exp} XP
          </Activity>
          <Activity>
            <FiFileText />
            {activity.postsCreated} Posts
          </Activity>
          <Activity>
            <FiCoffee />
            {activity.commentsCreated} Comentarios
          </Activity>
          <Activity>
            <FiThumbsUp />
            {activity.postsLiked} Posts Curtidos
          </Activity>
          <Activity>
            <FiThumbsUp />
            {activity.commentsLiked} Commentarios Curtidos
          </Activity>
        </Box>
        <Box id="interactions">
          <p>Interações</p>
          <ScrollableContent>
            <Interaction>
              <Link to="/" href="">
                {`Algum Usuario comentou seu post "Avançando com o Desenvolvimento"`}
              </Link>
              <span>7h ago</span>
            </Interaction>
          </ScrollableContent>
        </Box>
      </Container>
    </>
  );
};

export default UserProfile;
