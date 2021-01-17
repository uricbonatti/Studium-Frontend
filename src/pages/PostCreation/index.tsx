import React, { useRef, useCallback, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { FiBookmark, FiFileText, FiLink } from 'react-icons/fi';

import Header from '../../components/Header';
import Editor from '../../components/Editor';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from './../../components/TextArea/index';

import getValidationErrors from '../../utils/getValidationErrors';

import { ButtonContainer, Container, Content } from './styles';

import CreatePostMutation from './../../graphql/Post/CreatePostMutation';
import ListCategoriesQuery from './../../graphql/Category/ListCategoriesQuery';

interface Tag {
  tag_id: string;
}

interface PostCreationFormData {
  title: string;
  image_url: string;
  body: string;
  resume: string;
  category_id: string;
  tag_ids: Tag[];
}

interface MutationData {
  createPost: {
    id: string;
  };
}
interface Category {
  id: string;
  name: string;
}
interface IListCategory {
  listCategories?: Category[];
}

const PostCreation: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  //Arrumar a mutation antes de commitar
  const [
    createPostMutation,
    { data: createData, error: createError },
  ] = useMutation<MutationData>(CreatePostMutation, {
    onCompleted: () => {
      history.push(`/post/${createData?.createPost.id}`);
    },
    onError: () => {
      console.log(createError?.message);
    },
  });

  const [
    loadCategories,
    { data: categoriesData, error: categoriesError },
  ] = useLazyQuery<IListCategory>(ListCategoriesQuery, {
    onCompleted: () => {
      categoriesData?.listCategories &&
        setCategories([...categoriesData.listCategories]);
      console.log(categories);
      console.log(categoriesData?.listCategories);
    },
    onError: () => {
      console.log(categoriesError?.message);
    },
  });

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const handleSubmit = useCallback(
    async (data: PostCreationFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          title: Yup.string()
            .required('Titulo Obrigatório')
            .min(5, 'O Titulo precisa ter ao menos 5 caracteres')
            .max(50, 'O Titulo pode ter no maximo 50 caracteres'),
          resume: Yup.string()
            .required('Resumo Necessario')
            .min(25, 'O Resumo precisa ter ao menos 25 caracteres')
            .max(266, 'O Resumo pode ter no maximo 255 caracteres'),
          image_url: Yup.string().url(
            'A imagem do post precisa vir de uma url',
          ),
          body: Yup.string()
            .required('Corpo do Post Obrigatório')
            .min(255, 'O Post precisa ter no minimo 255 caracteres'),
          category_id: Yup.string().required(
            'É necessario selecionar uma categoria',
          ),
          //Precisa validar esta condição
          tag_ids: Yup.array().of(
            Yup.object().shape({
              tag_id: Yup.string().required(
                'É necessario selecionar ao menos uma Tag',
              ),
            }),
          ),
        });
        await schema.validate(data, { abortEarly: false });
        await createPostMutation({
          variables: {
            title: data.title,
            image_url: data.image_url,
            body: data.body,
            category_id: data.category_id,
            tag_ids: data.tag_ids,
          },
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          console.table(errors);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [createPostMutation],
  );
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Crie seu Post</h1>
            <Input name="title" icon={FiBookmark} placeholder="Titulo" />
            <Input
              name="image_url"
              icon={FiLink}
              placeholder="Link da Imagem"
            />
            <TextArea name="resume" icon={FiFileText} placeholder="Resumo" />
            <Editor name="body" />
            <ButtonContainer>
              <Button type="reset">Cancelar</Button>
              <Button type="submit">Enviar</Button>
            </ButtonContainer>
          </Form>
        </Content>
      </Container>
    </>
  );
};
export default PostCreation;
