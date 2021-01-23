import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as ReactSelectProps,
} from 'react-select';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error, selectStyle } from './styles';

interface SelectProps extends ReactSelectProps<OptionTypeBase> {
  name: string;
  containerStyle?: object;
  icon: React.ComponentType<IconBaseProps>;
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const MultiSelect: React.FC<Omit<SelectProps, 'isMulti'>> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const selectRef = useRef<any | OptionTypeBase>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, error, defaultValue, registerField } = useField(name);

  const handleSelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!selectRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (!ref.state.value) {
          return [];
        }
        return ref.state.value.map((option: OptionTypeBase) => option.value);
      },
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
      <ReactSelect
        onFocus={handleSelectFocus}
        onBlur={handleSelectBlur}
        defaultValue={defaultValue}
        styles={selectStyle}
        ref={selectRef}
        isMulti
        {...rest}
        options={options}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default MultiSelect;
