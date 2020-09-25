// Core
import React, { FC } from 'react';

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
  <Wrapper>
    <div className="todo__image">
      <img src={item.imgUrl} alt="todo" />
    </div>
    <div className="todo__title">
      {item.title}
    </div>
  </Wrapper>
);
