import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { Container, HeaderContent, Profile } from './styles';
import defaultUser from '../../assets/default-user-img.jpg';

import logoImg from '../../assets/LogoStudium.svg';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <img src={logoImg} alt="Studium" />
        {user && (
          <>
            <Profile>
              <img src={user.avatar || defaultUser} alt={user.name} />
              <div>
                <span>Bem-vindo,</span>

                <Link to="/profile">
                  <strong>{user.name}</strong>
                </Link>
              </div>
            </Profile>
            <button type="button" onClick={signOut}>
              <FiPower />
            </button>
          </>
        )}
      </HeaderContent>
    </Container>
  );
};

export default Header;
