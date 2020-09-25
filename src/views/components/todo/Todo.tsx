// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Types
import { Todo as TodoType } from '../../../model/todos/types';

// Wrapper
import { Wrapper } from './Wrapper';

type PropTypes = {
  children?: never;
  item: TodoType;
}

export const Todo: FC<PropTypes> = ({
  item,
}: PropTypes) => (
  <Link style={{ textDecoration: 'none' }} to={`/detailed/${item.id}`}>
    <Wrapper>

      <div>
        <img
          width="250px"
          height="250px"
          src={item.img}
          alt="todo"
        />
      </div>

      <div>
        <div>
          <h2>
            {item.title}
          </h2>
        </div>
        <div>
          {item.description}
        </div>
      </div>

    </Wrapper>
  </Link>
);
