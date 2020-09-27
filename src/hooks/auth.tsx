import React, { createContext, useCallback, useState, useContext } from 'react';

// console.log("Api rodando com Dados estaticos temporarios de usuario.").

interface User {
  id: string;
  userName: string;
  name: string;
  email: string;
  exp: number;
  level: number;
  permisson: 'STANDARD' | 'MOD' | 'ADMIN';
  avatar: string;
  description: string;
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
      //inserir a passagem de token, seja  header bearer seja por parametro
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    // const response = await api.post('login route', {/*Parameters*/})
    // const { token, user } = response.data;
    await email.concat(password);
    const token: string = 'abc';
    const user: User = {
      id: 'abc',
      userName: 'CommonUser',
      name: 'Usuario de Teste',
      email: 'teste@studium.net',
      permisson: 'STANDARD',
      description: 'Tester User from development',
      avatar:
        'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      exp: 0,
      level: 1,
      github: 'uricbonatti',
      linkedin: 'https://www.linkedin.com/in/uric-bonatti-cardoso-820275132/',
    };
    localStorage.setItem('@Studium:token', token);
    localStorage.setItem('@Studium:user', JSON.stringify(user));
    setData({ token, user });
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
