import React, { createContext, useCallback, useState, useContext } from 'react';

import LoginQuery from '../graphql/User/LoginQuery';
import graphqlApi from '../services/graphqlApi';

// console.log("Api rodando com Dados estaticos temporarios de usuario.").

export interface User {
  id: string;
  name: string;
  email: string;
  exp_percent: number;
  level: number;
  avatar_url: string;
  description?: string;
  github?: string;
  linkedin?: string;
}

interface AuthState {
  token: string;
  user: User;
}
//This must be change
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Studium:token');
    const user = localStorage.getItem('@Studium:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    graphqlApi
      .query({
        query: LoginQuery,
        variables: { email, password },
      })
      .then((resp) => {
        const { token, user }: AuthState = resp.data.login;

        localStorage.setItem('@Studium:token', token);
        localStorage.setItem('@Studium:user', JSON.stringify(user));
        setData({ token, user });
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Studium:token');
    localStorage.removeItem('@Studium:user');
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@Studium:user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );
  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider ');
  }
  return context;
}
export { AuthProvider, useAuth };
