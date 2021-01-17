/* eslint-disable no-multi-str */
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  TextareaHTMLAttributes,
} from 'react';

import { Editor as TinyEditor } from '@tinymce/tinymce-react';

import { Container } from './styles';
import { useField } from '@unform/core';

interface EditorProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  containerStyle?: object;
  skin?: 'dark' | 'default';
}

const Editor: React.FC<EditorProps> = ({
  skin = 'default',
  containerStyle = {},
  name,
}) => {
  const editorRef = useRef<TinyEditor>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, error, registerField } = useField(name);

  const handleEditorFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleEditorBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!editorRef.current?.props?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: editorRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleEditorChange = useCallback((content: string, editor: any) => {
    console.log('Content was updated:', content);
  }, []);
  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      <TinyEditor
        ref={editorRef}
        onBlur={handleEditorBlur}
        onFocus={handleEditorFocus}
        initialValue=""
        init={{
          placeholder: 'Insira o conteudo do post aqui',
          width: '100%',
          height: 100,
          // skin_url: '',

          // theme_url: '',
          menubar: false,
          statusbar: false,
          skin: `oxide${skin === 'dark' ? '-dark' : ''}`,
          content_css: skin,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount codesample ',
          ],
          toolbar:
            'undo redo | formatselect codesample| bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help  ',
        }}
        onEditorChange={handleEditorChange}
      />
    </Container>
  );
};

export default Editor;
