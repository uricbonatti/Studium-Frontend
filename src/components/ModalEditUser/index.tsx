import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import Modal from '../Modal';
import Input from '../Input';
import { User } from '../../hooks/auth';
import { Form } from './styles';
import { FiCamera } from 'react-icons/fi';
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
        <Input
          name="avatar_url"
          placeholder="Cole o link aqui"
          icon={FiCamera}
        />
        <Input name="name" placeholder="Cole o link aqui" icon={FiCamera} />
        <Input
          name="description"
          placeholder="Cole o link aqui"
          icon={FiCamera}
        />
        <Input name="github" placeholder="Cole o link aqui" icon={FiCamera} />
        <Input name="linkedin" placeholder="Cole o link aqui" icon={FiCamera} />
        <Input name="email" placeholder="Cole o link aqui" icon={FiCamera} />
        <Input name="password" placeholder="Cole o link aqui" icon={FiCamera} />
        <Input
          name="old_password"
          placeholder="Cole o link aqui"
          icon={FiCamera}
        />
        <Button type="submit">Atualizar Perfil</Button>
      </Form>
    </Modal>
  );
};

export default ModalEditUser;
