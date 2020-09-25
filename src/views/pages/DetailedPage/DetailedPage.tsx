// Core
import React, { FC, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

// Hooks
import { useTodo } from '../../../hooks/useTodo';
import { useAuthorizedStorage } from '../../../hooks/useAuthorizedStorage';

// Components
import { Wrapper } from './Wrapper';
import { FourColorsLoader } from '../../components/loaders';

type PropTypes = {
  children?: never;
}

export const DetailedPage: FC<PropTypes> = () => {
  const { id } = useParams();
  const { authorized } = useAuthorizedStorage();
  const { todoState, fetchTodo } = useTodo();

  useEffect(() => {
    if (authorized) {
      fetchTodo(id);
    }
  }, [authorized]);

  const redirection = !authorized && <Redirect to="/auth" />;

  const page = !todoState.fetching && (
    <Wrapper>
      <div>
        <img src={todoState.todo.img} alt="todo" />
      </div>
      <div>
        <div>
          <h2>
            {todoState.todo.title}
          </h2>
        </div>
        <div>
          {todoState.todo.description}
        </div>
      </div>

    </Wrapper>
  );

  const loader = todoState.fetching && <FourColorsLoader />;

  return (
    <div>
      { page }
      { redirection }
      { loader }
    </div>
  );
};
