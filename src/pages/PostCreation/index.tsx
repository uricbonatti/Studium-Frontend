import React, { useRef, useCallback, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { FiBookmark, FiFileText, FiLink, FiList } from 'react-icons/fi';

import Header from '../../components/Header';
import Editor from '../../components/Editor';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from './../../components/TextArea/index';
import SimpleSelect from './../../components/SimpleSelect/index';
import MultiSelect from './../../components/MultiSelect/index';

import getValidationErrors from '../../utils/getValidationErrors';

import { ButtonContainer, Container, Content } from './styles';

import CreatePostMutation from './../../graphql/Post/CreatePostMutation';
import ListCategoriesQuery from './../../graphql/Category/ListCategoriesQuery';
import toast from '../../utils/toast';
import ListTagsQuery from '../../graphql/Tag/ListTagsQuery';

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
interface SelectorCategory {
  value: string;
  label: string;
}
interface Category {
  id: string;
  name: string;
}
interface IListCategory {
  listCategories?: Category[];
}
interface IListTags {
  listTags?: Category[];
}

const PostCreation: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [categories, setCategories] = useState<SelectorCategory[]>([]);

  const [tags, setTags] = useState<SelectorCategory[]>([]);

  //Arrumar a mutation antes de commitar
  const [
    createPostMutation,
    { error: createError },
  ] = useMutation<MutationData>(CreatePostMutation, {
    onCompleted: ({ createPost }) => {
      console.log(createPost);
      history.push(`/post/${createPost.id}`);
      toast.success('Post criado com sucesso!');
    },
    onError: () => {
      console.log(createError);
    },
  });

  const [
    loadCategories,
    { data: categoriesData, error: categoriesError },
  ] = useLazyQuery<IListCategory>(ListCategoriesQuery, {
    onCompleted: () => {
      if (!!categoriesData?.listCategories) {
        const selectorCategories = categoriesData.listCategories.map(
          (category) => {
            return {
              label: category.name,
              value: category.id,
            };
          },
        );
        setCategories(selectorCategories);
      }
    },
    onError: () => {
      console.log(categoriesError);
    },
  });
  const [
    loadTags,
    { data: tagsData, error: tagsError },
  ] = useLazyQuery<IListTags>(ListTagsQuery, {
    onCompleted: () => {
      if (!!tagsData?.listTags) {
        const selectorTags = tagsData.listTags.map((tag) => {
          return {
            label: tag.name,
            value: tag.id,
          };
        });
        setTags(selectorTags);
      }
    },
    onError: () => {
      console.log(tagsError);
    },
  });

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  // useEffect(() => {
  //   loadTags({
  //     variables: {
  //       filter: {
  //         category_id: currentCategory?.value,
  //       },
  //     },
  //   });
  // }, [currentCategory]);

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
            Yup.string().required('É necessario selecionar ao menos uma Tag'),
          ),
        });
        await schema.validate(data, { abortEarly: false });
        await createPostMutation({
          variables: {
            data: {
              title: data.title,
              image_url: data.image_url,
              body: data.body,
              category_id: data.category_id,
              tag_ids: data.tag_ids.map((tag) => {
                return { tag_id: tag };
              }),
            },
          },
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        toast.error('Erro ao enviar o Post');
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
            <SimpleSelect
              name="category_id"
              icon={FiList}
              placeholder="Selecione uma categoria"
              loadOptions={loadCategories}
              options={categories}
              onChange={(option: SelectorCategory) =>
                loadTags({
                  variables: {
                    filter: {
                      category_id: option.value,
                    },
                  },
                })
              }
            />
            <MultiSelect
              name="tag_ids"
              icon={FiList}
              placeholder="Selecione as Tags do Post"
              loadOptions={loadTags}
              options={tags}
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
