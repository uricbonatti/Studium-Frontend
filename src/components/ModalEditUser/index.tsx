import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import Modal from '../Modal';
import Input from '../Input';
import { User } from '../../hooks/auth';
import { Form } from './styles';
import { FiCamera, FiGithub, FiLinkedin, FiMail, FiKey, FiMeh, FiEdit } from 'react-icons/fi';
import Button from '../Button/index';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateUser: (
    userToEdit: Omit<User, 'id' | 'exp_percent' | 'level'>,
  ) => void;
  editingUser: User;
}
interface IEditUserData {
  avatar_url: string;
  name: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  password: string;
  old_password: string;
}

const ModalEditUser: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingUser,
  handleUpdateUser,
}) => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: IEditUserData) => {
      handleUpdateUser(data);
      setIsOpen();
    },
    [handleUpdateUser, setIsOpen],
  );
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingUser}>
        <h1>Editar Perfil</h1>
        <Input name="name" placeholder="Digite seu nome" icon={FiMeh} />
        <Input name="description" placeholder="Descreva um pouco sobre você" icon={FiEdit} />
        <Input name="avatar_url" placeholder="Cole o link do seu avatar" icon={FiCamera} />
        <Input name="github" placeholder="Cole o link do seu github aqui" icon={FiGithub} />
        <Input name="linkedin" placeholder="Cole o link do seu linkedin aqui" icon={FiLinkedin} />
        <Input name="email" placeholder="Digite seu email" icon={FiMail} />
        <Input name="password" placeholder="Digite sua senha" icon={FiKey} />
        <Input name="old_password" placeholder="Confirme sua senha" icon={FiKey}/>
        <Button type="submit">Atualizar Perfil</Button>
      </Form>
    </Modal>
  );
};

export default ModalEditUser;
