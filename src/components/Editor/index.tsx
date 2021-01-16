/* eslint-disable no-multi-str */
import React, {
  useCallback,
  TextareaHTMLAttributes,
  useRef,
  useState,
} from 'react';
import { Editor as TinyEditor } from '@tinymce/tinymce-react';

import { Container } from './styles';
import { useEffect } from 'react';
import { useField } from '@unform/core';

interface EditorProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  containerStyle?: object;
  skin?: string;
}

const Editor: React.FC<EditorProps> = ({
  skin,
  containerStyle = {},
  name,
  ...rest
}) => {
  const editorRef = useRef<TinyEditor>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, error, defaultValue, registerField } = useField(name);

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
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: false,
          skin,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount codesample',
          ],
          toolbar:
            'undo redo | formatselect codesample| bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help | ',
        }}
        onEditorChange={handleEditorChange}
      />
    </Container>
  );
};

export default Editor;
