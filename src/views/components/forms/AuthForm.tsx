// Core
import React, {
  FC,
  useState,
  MouseEvent,
} from 'react';

// Components
import { ErrorDiv } from '../divs';
import { StyledForm } from './StyledForm';
import {
  SquareButtonWithShadow,
} from '../buttons';
import {
  InputWithAnimatedSpan,
} from '../inputs';
import {
  InputChangeEvent,
} from '../inputs/InputWithAnimatedSpan';

type FormTypes = {
  login: string;
  password: string;
}

type PropTypes = {
  children?: never;
  handleSubmit: (username: string, password: string) => void;
  error: string;
}

export const AuthForm: FC<PropTypes> = ({
  handleSubmit,
  error,
}: PropTypes) => {
  const [formValues, setFormValues] = useState<FormTypes>({
    login: '',
    password: '',
  });

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();

    handleSubmit(formValues.login, formValues.password);
  };

  const handleInputChange = (e: InputChangeEvent): void => {
    setFormValues({
      ...formValues,
      [e.name]: e.newText,
    });
  };

  return (
    <StyledForm>

      <ErrorDiv>
        {error}
      </ErrorDiv>

      <InputWithAnimatedSpan
        inputType="text"
        inputName="login"
        labelText="Login (root)"
        onChange={handleInputChange}
      />

      <InputWithAnimatedSpan
        inputType="password"
        inputName="password"
        labelText="Password (123)"
        onChange={handleInputChange}
      />

      <div style={{ display: 'flex' }}>
        <SquareButtonWithShadow onClick={handleClick} type="submit">
          Sign in
        </SquareButtonWithShadow>
      </div>
    </StyledForm>
  );
};
