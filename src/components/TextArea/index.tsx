import React, {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';
import { IconBaseProps } from 'react-icons';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  containerStyle?: object;
  icon: React.ComponentType<IconBaseProps>;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, error, defaultValue, registerField } = useField(name);

  const handleTextAreaFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleTextAreaBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!textAreaRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      <textarea
        onFocus={handleTextAreaFocus}
        onBlur={handleTextAreaBlur}
        defaultValue={defaultValue}
        ref={textAreaRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default TextArea;
