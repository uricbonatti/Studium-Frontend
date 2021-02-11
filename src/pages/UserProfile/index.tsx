import React, { useEffect, useState } from 'react';


import Header from '../../components/Header';
import { useAuth, User } from '../../hooks/auth';
import defaultAvatar from '../../assets/default-user-img.jpg';
// import ExpBar from '../../components/ExpBar';
import UserActivitySummaryQuery from '../../graphql/User/UserActivitySummaryQuery';
import graphqlApi from '../../services/graphqlApi';

import CardUser from '../../components/CardUser'

import {
  Container,
} from './styles';
import ModalEditUser from '../../components/ModalEditUser';

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
        <CardUser
          className="card-perfil"
          //title="Perfil"
          avatar_url={user.avatar_url || defaultAvatar}
          user={user}
        />
        <CardUser
          className="card-activities"
          title="Conquistas"
        />
        <CardUser
          className="card-activities"
          title="Posts Recentes"
          posts={posts}
        />
        <CardUser
          className="card-activities"
          title="Atividades da semana"
        />
        <CardUser
          className="card-activities"
          title="Interações"
        />
      </Container>
    </>
  );
};

export default UserProfile;
